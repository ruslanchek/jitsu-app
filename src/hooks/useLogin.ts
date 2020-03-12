import { gql } from 'apollo-boost';
import { useLazyQuery } from '@apollo/react-hooks';
import { navigate } from '@reach/router';
import { PATHS } from '../common/paths';
import { getGraphQlError } from '../utils/getGraphQlError';
import { useAsyncEffect } from './useAsyncEffect';
import { useAuthorize } from './useAuthorize';

const LOGIN = gql`
  query Login($email: String!, $password: String!) {
    login(input: { email: $email, password: $password }) {
      token
    }
  }
`;

export const useLogin = () => {
  const [login, { loading, data, error }] = useLazyQuery(LOGIN);
  const authorize = useAuthorize();

  useAsyncEffect(async () => {
    if (data?.login?.token) {
      localStorage.setItem('token', data.login.token);
      await authorize();
    }
  }, [data]);

  return {
    loginUser: async (email: string, password: string) => {
      await login({ variables: { email, password } });
    },
    loading,
    error: getGraphQlError(error),
  };
};
