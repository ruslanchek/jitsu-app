import React, { FC, Fragment } from 'react';
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

export const RememberPasswordScreen: FC<IProps> = () => {
  return (
    <ScreenLayout>
      <Auth
        title='Remember password'
        subtitle={
          <Fragment>
            Or sign in&nbsp;<Anchor to={PATHS.AUTH_LOGIN}>to your account</Anchor>
          </Fragment>
        }>
        <form action=''>
          <FormRow>
            <FormLabel attrs={{ htmlFor: 'email' }}>Email</FormLabel>
            <Input attrs={{ id: 'email', autoComplete: 'email' }} />
          </FormRow>
          <FormRow type='button'>
            <Button
              attrs={{
                type: 'submit',
              }}>
              Send instructions
            </Button>
          </FormRow>
          <FormRow type='text'>Settle your email and we will send you instructions on how to change password</FormRow>
        </form>
      </Auth>
    </ScreenLayout>
  );
};
