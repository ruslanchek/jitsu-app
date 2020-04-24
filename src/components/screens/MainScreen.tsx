import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router';
import { ScreenLayout } from '../global/ScreenLayout';
import { Alert, EAlertType } from '../ui/alert/Alert';
import { H2 } from '../ui/typography/H2';

interface IProps extends RouteComponentProps {}

export const MainScreen: FC<IProps> = () => {
  return (
    <ScreenLayout>
      <div className='mb-4'>
        <H2>Project</H2>
      </div>
      <Alert type={EAlertType.Info} details='Details' onClick={() => {}}>
        An update is available
      </Alert>
    </ScreenLayout>
  );
};
