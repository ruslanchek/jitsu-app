import { ENV } from './env';

export const DEFAULTS = {
  COOKIE_OPTIONS: {
    domain: `.${ENV.BASE_DOMAIN}`,
    path: '/',
    expires: new Date(new Date().setFullYear(new Date().getFullYear() + 10)),
  },
};
