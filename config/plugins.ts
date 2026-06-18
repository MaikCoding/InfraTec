import type { Core } from '@strapi/strapi';

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Plugin => ({
    email: {
        config: {
            provider: '@strapi/provider-email-nodemailer',
            providerOptions: {
                host: env('SMTP_HOST', 'smtp.example.com'),
                port: env.int('SMTP_PORT', 587),
                secure: env.bool('SMTP_SECURE', false), // true for 465, false for 587
                auth: {
                    user: env('SMTP_USER', ''),
                    pass: env('SMTP_PASS', ''),
                },
                tls: {
                    rejectUnauthorized: env.bool('SMTP_REJECT_UNAUTHORIZED', true),
                },
            },
            settings: {
                defaultFrom: env('SMTP_FROM', 'noreply@example.com'),
                defaultReplyTo: env('SMTP_REPLY_TO', 'info@example.com'),
            },
        },
    },
});

export default config;
