import React, { FC } from 'react';
import { EOLocale } from 'eo-locale';
import { DEFAULT_LOCALE } from '../../common/defaults';

const LOCALES = [
  {
    language: 'en',
    messages: require('../../locales/en.json'),
  },
];

export const Providers: FC = ({ children }) => {
  return (
    <EOLocale.Provider language={DEFAULT_LOCALE} locales={LOCALES}>
      {children}
    </EOLocale.Provider>
  );
};
