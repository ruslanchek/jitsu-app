import React, { FC } from 'react';
import { EOLocale } from 'eo-locale';
import { DEFAULT_LOCALE } from '../../common/defaults';
import { GlobalHandlersProvider } from '../providers/GlobalHandlersProvider';
import { ApolloClientProvider } from '../providers/ApolloClientProvider';
import { Modals } from '../ui/modals/Modals';

const LOCALES = [
  {
    language: 'en',
    messages: require('../../locales/en.json'),
  },
];

export const Providers: FC = ({ children }) => {
  return (
    <EOLocale.Provider language={DEFAULT_LOCALE} locales={LOCALES}>
      <GlobalHandlersProvider>
        <ApolloClientProvider>
          <Modals rootContainerSelector='#root-modals'>{children}</Modals>
        </ApolloClientProvider>
      </GlobalHandlersProvider>
    </EOLocale.Provider>
  );
};
