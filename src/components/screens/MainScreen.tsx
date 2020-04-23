import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router';
import { ScreenLayout } from '../global/ScreenLayout';
import { Alert, EAlertType } from '../ui/alert/Alert';

interface IProps extends RouteComponentProps {}

export const MainScreen: FC<IProps> = () => {
  return (
    <ScreenLayout>
      <div className='min-h-screen grid '>
        <Alert type={EAlertType.Success} details='Details' title='New update available' onClick={() => {}}>
          How about the forest?
        </Alert>
      </div>
    </ScreenLayout>
  );
};
