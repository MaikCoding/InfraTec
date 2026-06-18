/**
 * contact-submission controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController(
    'api::contact-submission.contact-submission',
    ({ strapi }) => ({
        async create(ctx) {
            const { name, email, phone, message } = ctx.request.body?.data ?? ctx.request.body ?? {};

            // Basic server-side validation
            if (!name || !email || !message) {
                return ctx.badRequest('Pflichtfelder fehlen: name, email, message.');
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                return ctx.badRequest('Ungültige E-Mail-Adresse.');
            }

            // Store IP for basic spam detection (private field, not exposed via API)
            const ip =
                ctx.request.headers['x-forwarded-for']?.toString().split(',')[0].trim() ||
                ctx.request.ip ||
                '';

            // Save to database
            const entry = await strapi.entityService.create(
                'api::contact-submission.contact-submission',
                {
                    data: {
                        name: name.trim().slice(0, 255),
                        email: email.trim().toLowerCase(),
                        phone: phone ? String(phone).trim().slice(0, 50) : null,
                        message: message.trim(),
                        read: false,
                        ip_address: ip,
                    },
                }
            );

            const companyEmail = process.env.COMPANY_EMAIL || 'info@os-infratec.de';

            // ── Notification email to the company ────────────────────────────────────
            try {
                await strapi.plugin('email').service('email').send({
                    to: companyEmail,
                    subject: `Neue Kontaktanfrage von ${name}`,
                    html: `
            <div style="font-family: Inter, Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; padding: 32px; border-radius: 8px;">
              <div style="background: #032A63; padding: 24px 32px; border-radius: 8px 8px 0 0;">
                <h1 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: 700;">Neue Kontaktanfrage</h1>
                <p style="color: #a8c4e8; margin: 4px 0 0; font-size: 14px;">OS InfraTec GmbH – Kontaktformular</p>
              </div>
              <div style="background: #ffffff; padding: 32px; border-radius: 0 0 8px 8px; border: 1px solid #e4e8ee; border-top: none;">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 10px 0; color: #5d6778; font-size: 13px; width: 120px; vertical-align: top;">Name</td>
                    <td style="padding: 10px 0; color: #2b2f36; font-size: 15px; font-weight: 600;">${name}</td>
                  </tr>
                  <tr style="border-top: 1px solid #e4e8ee;">
                    <td style="padding: 10px 0; color: #5d6778; font-size: 13px; vertical-align: top;">E-Mail</td>
                    <td style="padding: 10px 0; color: #2b2f36; font-size: 15px;"><a href="mailto:${email}" style="color: #032A63;">${email}</a></td>
                  </tr>
                  ${phone ? `<tr style="border-top: 1px solid #e4e8ee;"><td style="padding: 10px 0; color: #5d6778; font-size: 13px; vertical-align: top;">Telefon</td><td style="padding: 10px 0; color: #2b2f36; font-size: 15px;">${phone}</td></tr>` : ''}
                  <tr style="border-top: 1px solid #e4e8ee;">
                    <td style="padding: 10px 0; color: #5d6778; font-size: 13px; vertical-align: top;">Nachricht</td>
                    <td style="padding: 10px 0; color: #2b2f36; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message}</td>
                  </tr>
                </table>
                <div style="margin-top: 24px; padding: 16px; background: #eaf1fc; border-radius: 6px; font-size: 13px; color: #5d6778;">
                  Eingegangen am ${new Date().toLocaleString('de-DE', { timeZone: 'Europe/Berlin' })}
                </div>
              </div>
            </div>
          `,
                });
            } catch (err) {
                strapi.log.error('Benachrichtigungs-E-Mail konnte nicht gesendet werden:', err);
            }

            // ── Confirmation email to the sender ─────────────────────────────────────
            try {
                await strapi.plugin('email').service('email').send({
                    to: email,
                    subject: 'Ihre Anfrage bei OS InfraTec GmbH – Eingangsbestätigung',
                    html: `
            <div style="font-family: Inter, Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; padding: 32px; border-radius: 8px;">
              <div style="background: #032A63; padding: 24px 32px; border-radius: 8px 8px 0 0;">
                <h1 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: 700;">Vielen Dank für Ihre Anfrage</h1>
                <p style="color: #a8c4e8; margin: 4px 0 0; font-size: 14px;">OS InfraTec GmbH</p>
              </div>
              <div style="background: #ffffff; padding: 32px; border-radius: 0 0 8px 8px; border: 1px solid #e4e8ee; border-top: none;">
                <p style="color: #2b2f36; font-size: 15px; line-height: 1.7; margin: 0 0 20px;">
                  Hallo ${name},<br><br>
                  wir haben Ihre Nachricht erhalten und werden uns schnellstmöglich bei Ihnen melden.
                </p>
                <div style="background: #f8fafc; border-left: 3px solid #032A63; padding: 16px 20px; border-radius: 0 6px 6px 0; margin: 0 0 24px;">
                  <p style="color: #5d6778; font-size: 13px; margin: 0 0 8px;">Ihre Nachricht:</p>
                  <p style="color: #2b2f36; font-size: 14px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
                </div>
                <p style="color: #5d6778; font-size: 13px; line-height: 1.6; margin: 0 0 24px;">
                  Bei dringenden Anfragen erreichen Sie uns unter:<br>
                  <a href="tel:+492238966960" style="color: #032A63;">+49 2238 96693 60</a> &nbsp;|&nbsp;
                  <a href="mailto:${companyEmail}" style="color: #032A63;">${companyEmail}</a>
                </p>
                <hr style="border: none; border-top: 1px solid #e4e8ee; margin: 24px 0;">
                <p style="color: #5d6778; font-size: 12px; margin: 0;">
                  OS InfraTec GmbH &bull; Gartenkamp 137a, 49492 Westerkappeln<br>
                  Diese E-Mail wurde automatisch generiert. Bitte antworten Sie nicht auf diese Nachricht.
                </p>
              </div>
            </div>
          `,
                });
            } catch (err) {
                strapi.log.error('Bestätigungs-E-Mail konnte nicht gesendet werden:', err);
            }

            ctx.status = 201;
            return {
                data: {
                    id: entry.id,
                    message: 'Ihre Anfrage wurde erfolgreich übermittelt.',
                },
            };
        },
    })
);
