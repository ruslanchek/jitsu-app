import React, { FC, Fragment } from 'react';
import { RouteComponentProps } from '@reach/router';
import { ScreenLayout } from '../../global/ScreenLayout';
import { Auth } from './Auth';
import { Anchor } from '../../ui/misc/Anchor';
import { FormLabel } from '../../ui/label/FormLabel';
import { Input } from '../../ui/form/Input';
import { Button } from '../../ui/button/Button';
import { PATHS } from '../../../common/paths';
import { FormRow } from '../../ui/form/FormRow';

interface IProps extends RouteComponentProps {}

export const LoginScreen: FC<IProps> = () => {
  return (
    <ScreenLayout minimalUi>
      <Auth
        title='Sign in to your account'
        subtitle={
          <Fragment>
            Or start your&nbsp;
            <Anchor to={PATHS.AUTH_REGISTER}>14-day free trial</Anchor>
          </Fragment>
        }>
        <form action=''>
          <FormRow>
            <FormLabel attrs={{ htmlFor: 'email' }}>Email</FormLabel>
            <Input attrs={{ id: 'email', autoComplete: 'email', autoFocus: true }} />
          </FormRow>
          <FormRow>
            <FormLabel attrs={{ htmlFor: 'password' }}>Password</FormLabel>
            <Input attrs={{ id: 'password', type: 'password', autoComplete: 'current-password' }} />
          </FormRow>
          <FormRow type='button'>
            <Button
              attrs={{
                type: 'submit',
              }}>
              Sign in
            </Button>
          </FormRow>
          <FormRow type='text'>
            <Anchor to={PATHS.AUTH_REMEMBER_PASSWORD}>Remember password</Anchor>
          </FormRow>
        </form>
      </Auth>
    </ScreenLayout>
  );
};
