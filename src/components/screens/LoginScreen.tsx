import React, { FC } from 'react';
import { css } from '@emotion/core';
import { ScreenWrapper } from '../common/ScreenWrapper';
import { RouteComponentProps } from '@reach/router';
import { MAIN_PADDING } from '../../common/ui';
import { useLogin } from '../../hooks/useLogin';
import { useForm } from 'react-hook-form';
import { Button } from '../ui/buttons/Button';
import { VALIDATION_PATTERNS } from '../../common/validation-patterns';

interface IModel {
  email: string;
  password: string;
}

export const LoginScreen: FC<RouteComponentProps> = () => {
  const { login, loading, error } = useLogin();
  const { handleSubmit, register } = useForm<IModel>();

  function onSubmit(model: IModel) {
    login(model.email, model.password);
  }

  return (
    <ScreenWrapper>
      {error?.message}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className='regular-input'
          name='email'
          type='email'
          autoComplete='email'
          ref={register({ required: true, pattern: VALIDATION_PATTERNS.EMAIL })}
        />
        <input
          className='regular-input'
          name='password'
          type='password'
          autoComplete='current-password'
          ref={register({ required: true, minLength: 6, maxLength: 64 })}
        />
        <Button type='submit' color='default' size='large' loading={loading}>
          Login
        </Button>
      </form>
    </ScreenWrapper>
  );
};

const styles = {
  root: css`
    padding: ${MAIN_PADDING.VERTICAL} 0;
  `,
};
