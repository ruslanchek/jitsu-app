import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { useMutationResult } from './useMutationResult';
import { CheckAuthModel } from '../models/auth';

export const useCheckAuth = () => {
  const [checkAuth, { loading }] = useMutation(QUERY);
  const mutationResult = useMutationResult(CheckAuthModel, 'checkAuth');
  return {
    loading,
    checkAuth: async () => {
      const { data, error } = await mutationResult(checkAuth());
      return !!(data && !error);
    },
  };
};

const QUERY = gql`
  mutation CheckAuth {
    checkAuth {
      result
    }
  }
`;
