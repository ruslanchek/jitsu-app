import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { useMutationResult } from './useMutationResult';
import { AuthModel, LoginMutationModel } from '../models/auth';
import { plainToClass } from 'class-transformer';

export const useLogin = () => {
  const [login, { loading }] = useMutation(QUERY);
  const mutationResult = useMutationResult(AuthModel, 'login');
  return {
    loading,
    authLogin: async (model: LoginMutationModel) => {
      return await mutationResult(
        login({
          variables: plainToClass(LoginMutationModel, model),
        }),
      );
    },
  };
};

const QUERY = gql`
  mutation($email: String!, $password: String!) {
    login(input: { email: $email, password: $password }) {
      token
    }
  }
`;
