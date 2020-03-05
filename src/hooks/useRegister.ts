import { gql } from 'apollo-boost';
import { useLazyQuery, useMutation } from '@apollo/react-hooks';
import { navigate } from '@reach/router';
import { PATHS } from '../common/paths';
import { getGraphQlError } from '../utils/getGraphQlError';

const REGISTER = gql`
  mutation Register($email: String!, $password: String!) {
    register(input: { email: $email, password: $password }) {
      token
    }
  }
`;

export const useRegister = () => {
  const [register, { loading, data, error }] = useMutation(REGISTER);

  if (data?.register?.token) {
    localStorage.setItem('token', data.register.token);
    navigate(PATHS.MAIN);
  }

  return {
    registerUser: async (email: string, password: string) => {
      await register({ variables: { email, password } });
    },
    loading,
    error: getGraphQlError(error),
  };
};
