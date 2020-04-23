import React, { FC, Fragment } from 'react';
import { RouteComponentProps } from '@reach/router';
import { ScreenLayout } from '../../global/ScreenLayout';
import { Auth } from './Auth';
import { Anchor } from '../../ui/misc/Anchor';
import { FormLabel } from '../../ui/label/FormLabel';
import { Input } from '../../ui/form/Input';
import { Button } from '../../ui/button/Button';

interface IProps extends RouteComponentProps {}

export const LoginScreen: FC<IProps> = () => {
  return (
    <ScreenLayout>
      <Auth
        title='Sign in to your account'
        subtitle={
          <Fragment>
            Or start your&nbsp;
            <Anchor attrs={{ href: '#' }}>14-day free trial</Anchor>
          </Fragment>
        }>
        <form action=''>
          <div>
            <FormLabel attrs={{ htmlFor: 'email' }}>Email</FormLabel>
            <Input attrs={{ id: 'email', autoComplete: 'email' }} />
          </div>
          <div className='mt-4'>
            <FormLabel attrs={{ htmlFor: 'password' }}>Password</FormLabel>
            <Input attrs={{ id: 'password', type: 'password', autoComplete: 'current-password' }} />
          </div>
          <div className='mt-8'>
            <Button
              attrs={{
                type: 'submit',
              }}>
              Log in
            </Button>
          </div>
          <div className='text-center text-sm mt-6'>
            <Anchor attrs={{ href: '#' }}>Remember password</Anchor>
          </div>
        </form>
      </Auth>
    </ScreenLayout>
  );
};
