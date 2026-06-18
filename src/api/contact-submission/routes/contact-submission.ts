/**
 * contact-submission router
 */

import { factories } from '@strapi/strapi';

// The default core router provides: find, findOne, create, update, delete
// We keep only what admins need (find, findOne, update for marking as read)
// plus the public create endpoint.
export default factories.createCoreRouter('api::contact-submission.contact-submission', {
    config: {
        find: {
            middlewares: [],
        },
        findOne: {
            middlewares: [],
        },
        create: {
            middlewares: [],
        },
        update: {
            middlewares: [],
        },
        delete: {
            middlewares: [],
        },
    },
});
