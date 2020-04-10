import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { useMutationResult } from './useMutationResult';
import { AuthModel, RegisterMutationModel } from '../models/auth';
import { plainToClass } from 'class-transformer';

export const useRegister = () => {
  const [register, { loading }] = useMutation(QUERY);
  const mutationResult = useMutationResult(AuthModel, 'register');
  return {
    loading,
    authRegister: async (model: RegisterMutationModel) => {
      return await mutationResult(
        register({
          variables: plainToClass(RegisterMutationModel, model),
        }),
      );
    },
  };
};

const QUERY = gql`
  mutation($email: String!, $password: String!) {
    register(input: { email: $email, password: $password }) {
      token
    }
  }
`;
