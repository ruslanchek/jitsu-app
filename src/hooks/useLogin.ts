import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { useGraphQLResult } from './useGraphQLResult';
import { AuthModel, LoginMutationModel } from '../models/auth';
import { plainToClass } from 'class-transformer';

export const useLogin = () => {
  const [login, { loading }] = useMutation(QUERY);
  const graphQLResult = useGraphQLResult(AuthModel, 'login');
  return {
    loading,
    authLogin: async (model: LoginMutationModel) => {
      return await graphQLResult(
        login({
          variables: plainToClass(LoginMutationModel, model),
        }),
      );
    },
  };
};

const QUERY = gql`
  mutation Login($email: String!, $password: String!) {
    login(input: { email: $email, password: $password }) {
      token
    }
  }
`;