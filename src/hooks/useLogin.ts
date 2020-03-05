import { gql } from 'apollo-boost';
import { useLazyQuery } from '@apollo/react-hooks';
import { navigate } from '@reach/router';
import { PATHS } from '../common/paths';
import { getGraphQlError } from '../utils/getGraphQlError';

const LOGIN = gql`
  query Login($email: String!, $password: String!) {
    login(input: { email: $email, password: $password }) {
      token
    }
  }
`;

export const useLogin = () => {
  const [login, { loading, data, error }] = useLazyQuery(LOGIN);

  if (data?.login?.token) {
    localStorage.setItem('token', data.login.token);
    navigate(PATHS.MAIN);
  }

  return {
    login: async (email: string, password: string) => {
      await login({ variables: { email, password } });
    },
    loading,
    error: getGraphQlError(error),
  };
};
