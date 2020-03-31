import React, { FC, useState } from 'react';
import { ScreenWrapper } from '../common/ScreenWrapper';
import { RouteComponentProps } from '@reach/router';
import { useLogin } from '../../hooks/useLogin';
import { useForm } from 'react-hook-form';
import { Button } from '../ui/buttons/Button';
import { VALIDATION_PATTERNS } from '../../common/validation-patterns';
import { useAuthorize } from '../../hooks/useAuthorize';
import { LoginMutationModel } from '../../models/auth';

export const LoginScreen: FC<RouteComponentProps> = () => {
  const authorize = useAuthorize();
  const { authLogin, loading } = useLogin();
  const { handleSubmit, register } = useForm<LoginMutationModel>();
  const [error, setError] = useState('');

  async function onSubmit(model: LoginMutationModel) {
    const result = await authLogin(model);
    if (result.data?.token) {
      localStorage.setItem('token', result.data.token);
      await authorize();
    }
    setError(result.error?.message || '');
  }

  return (
    <ScreenWrapper>
      {error}
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
