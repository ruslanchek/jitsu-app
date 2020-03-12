import React, { FC } from 'react';
import { ScreenWrapper } from '../common/ScreenWrapper';
import { RouteComponentProps, useNavigate } from '@reach/router';
import { useLogin } from '../../hooks/useLogin';
import { useForm } from 'react-hook-form';
import { Button } from '../ui/buttons/Button';
import { VALIDATION_PATTERNS } from '../../common/validation-patterns';

interface IModel {
  email: string;
  password: string;
}

export const LoginScreen: FC<RouteComponentProps> = () => {
  const { loginUser, loading, error } = useLogin();
  const { handleSubmit, register } = useForm<IModel>();

  function onSubmit(model: IModel) {
    loginUser(model.email, model.password);
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
