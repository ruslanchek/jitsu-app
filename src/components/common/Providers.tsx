import React, { FC } from 'react';
import { EOLocale } from 'eo-locale';
import { DEFAULT_LOCALE } from '../../common/defaults';
import { GlobalHandlersProvider } from '../providers/GlobalHandlersProvider';
import { ApolloClientProvider } from '../providers/ApolloClientProvider';
import { Modals } from '../ui/modals/Modals';
import { AuthProvider } from '../providers/AuthProvider';
import { RouterLocationProvider } from '../providers/RouterLocationProvider';

const LOCALES = [
  {
    language: 'en',
    messages: require('../../locales/en.json'),
  },
];

export const Providers: FC = ({ children }) => {
  return (
    <RouterLocationProvider>
      <EOLocale.Provider language={DEFAULT_LOCALE} locales={LOCALES}>
        <GlobalHandlersProvider>
          <ApolloClientProvider>
            <AuthProvider>
              <Modals>{children}</Modals>
            </AuthProvider>
          </ApolloClientProvider>
        </GlobalHandlersProvider>
      </EOLocale.Provider>
    </RouterLocationProvider>
  );
};
