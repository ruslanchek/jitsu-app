import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { useGraphQLResult } from './useGraphQLResult';
import { AuthModel, RegisterMutationModel } from '../models/auth';
import { plainToClass } from 'class-transformer';

export const useRegister = () => {
  const [register, { loading }] = useMutation(QUERY);
  const graphQLResult = useGraphQLResult(AuthModel, 'register');
  return {
    loading,
    authRegister: async (model: RegisterMutationModel) => {
      return await graphQLResult(
        register({
          variables: plainToClass(RegisterMutationModel, model),
        }),
      );
    },
  };
};

const QUERY = gql`
  mutation Register($email: String!, $password: String!) {
    register(input: { email: $email, password: $password }) {
      token
    }
  }
`;
