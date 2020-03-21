import React, { FC } from 'react';
import { ScreenWrapper } from '../common/ScreenWrapper';
import { RouteComponentProps } from '@reach/router';
import { useForm } from 'react-hook-form';
import { Button } from '../ui/buttons/Button';
import { VALIDATION_PATTERNS } from '../../common/validation-patterns';
import { useRegister } from '../../hooks/useRegister';
import { useAuthorize } from '../../hooks/useAuthorize';

interface IModel {
  email: string;
  password: string;
}

export const RegisterScreen: FC<RouteComponentProps> = () => {
  const { registerUser, loading, error } = useRegister();
  const { handleSubmit, register } = useForm<IModel>();
  const authorize = useAuthorize();

  async function onSubmit(model: IModel) {
    await registerUser(model.email, model.password);
    await authorize();
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
          autoComplete='new-password'
          ref={register({ required: true, minLength: 6, maxLength: 64 })}
        />
        <Button type='submit' color='default' size='large' loading={loading}>
          Register
        </Button>
      </form>
    </ScreenWrapper>
  );
};

