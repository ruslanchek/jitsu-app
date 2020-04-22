import { ENV } from './env';

export const DEFAULTS = {
  COOKIE_OPTIONS: {
    domain: `.${ENV.BASE_DOMAIN}`,
    path: '/',
    expires: new Date(new Date().setFullYear(new Date().getFullYear() + 10)),
  },

  PORTAL_ROOT_SELECTORS: {
    MODALS: '#modals-root',
    DROPDOWNS: '#dropdowns-root',
  },

  Z_INDEX: {
    MODALS: 1000,
  },
};
