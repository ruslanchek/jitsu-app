import React, { FC, useState } from 'react';
import { ScreenWrapper } from '../common/ScreenWrapper';
import { RouteComponentProps } from '@reach/router';
import { useForm } from 'react-hook-form';
import { Button } from '../ui/buttons/Button';
import { VALIDATION_PATTERNS } from '../../common/validation-patterns';
import { useRegister } from '../../hooks/useRegister';
import { useAuthorize } from '../../hooks/useAuthorize';
import { RegisterMutationModel } from '../../models/auth';
import { EStorageNames } from '../../common/storage-names';

export const RegisterScreen: FC<RouteComponentProps> = () => {
  const authorize = useAuthorize();
  const { handleSubmit, register } = useForm<RegisterMutationModel>();
  const { authRegister, loading } = useRegister();
  const [error, setError] = useState('');

  async function onSubmit(model: RegisterMutationModel) {
    const result = await authRegister(model);
    if (result.data?.token) {
      localStorage.setItem(EStorageNames.Token, result.data.token);
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
