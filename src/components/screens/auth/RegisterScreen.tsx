import React, { FC, Fragment, useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import { ScreenLayout } from '../../global/ScreenLayout';
import { Auth } from './Auth';
import { Anchor } from '../../ui/misc/Anchor';
import { PATHS } from '../../../common/paths';
import { FormLabel } from '../../ui/label/FormLabel';
import { Input } from '../../ui/form/Input';
import { Button } from '../../ui/button/Button';
import { FormRow } from '../../ui/form/FormRow';

interface IProps extends RouteComponentProps {}

export const RegisterScreen: FC<IProps> = () => {
  const [wide, setWide] = useState(false);

  return (
    <ScreenLayout>
      <Auth
        title='Sign up'
        subtitle={
          <Fragment>
            Or sign in&nbsp;<Anchor to={PATHS.AUTH_LOGIN}>to your account</Anchor>
          </Fragment>
        }>
        <form
          action=''
          onClick={e => {
            e.preventDefault();
          }}>
          <FormRow>
            <FormLabel attrs={{ htmlFor: 'email' }}>Email</FormLabel>
            <Input attrs={{ id: 'email', autoComplete: 'email', autoFocus: true }} />
          </FormRow>
          <FormRow>
            <FormLabel attrs={{ htmlFor: 'password' }}>Password</FormLabel>
            <Input attrs={{ id: 'password', type: 'password', autoComplete: 'new-password' }} />
          </FormRow>
          <FormRow type='button'>
            <Button
              attrs={{
                type: 'submit',
                onClick: () => {},
              }}>
              Sign up
            </Button>
          </FormRow>
          <FormRow type='text'>
            By signing up, I agree to <Anchor to='#'>Terms of Service</Anchor>
          </FormRow>
        </form>
      </Auth>
    </ScreenLayout>
  );
};
