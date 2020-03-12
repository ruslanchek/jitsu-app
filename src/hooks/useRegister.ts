import { gql } from 'apollo-boost';
import { useLazyQuery, useMutation } from '@apollo/react-hooks';
import { navigate } from '@reach/router';
import { PATHS } from '../common/paths';
import { getGraphQlError } from '../utils/getGraphQlError';
import { useAuthorize } from './useAuthorize';
import { useAsyncEffect } from './useAsyncEffect';

const REGISTER = gql`
  mutation Register($email: String!, $password: String!) {
    register(input: { email: $email, password: $password }) {
      token
    }
  }
`;

export const useRegister = () => {
  const [register, { loading, data, error }] = useMutation(REGISTER);
  const authorize = useAuthorize();

  useAsyncEffect(async () => {
    if (data?.register?.token) {
      localStorage.setItem('token', data.register.token);
      await authorize();
    }
  }, [data]);

  return {
    registerUser: async (email: string, password: string) => {
      await register({ variables: { email, password } });
    },
    loading,
    error: getGraphQlError(error),
  };
};
