import React, { FC } from 'react';
import { Wrapper } from './common/Wrapper';
import { EOLocale } from 'eo-locale';
import { EPhrase } from '../locales/EPhrase';

export const App: FC = () => {
  return (
    <Wrapper>
      <div>
        <EOLocale.Text id={EPhrase.Test_Test_Testttt} />
      </div>
    </Wrapper>
  );
};
