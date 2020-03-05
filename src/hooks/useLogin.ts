import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { navigate } from '@reach/router';
import { PATHS } from '../common/paths';

const LOGIN = gql`
  query Login($email: String!, $password: String!) {
    login(input: { email: $email, password: $password }) {
      token
    }
  }
`;

interface IResult {
  loading: boolean;
  error?: string;
}

export const useLogin = (email: string, password: string): IResult => {
  const { loading, error, data } = useQuery(LOGIN, { variables: { email, password } });

  if (data?.login?.token) {
    localStorage.setItem('token', data.login.token);
    navigate(PATHS.MAIN);
  }

  return { loading, error: error?.message };
};
