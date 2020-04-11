import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { UserMeModel } from '../models/user';
import { useQueryResult } from './useQueryResult';

export const useMe = () => {
  const query = useQuery(QUERY);
  const queryResult = useQueryResult(UserMeModel, 'getMe');
  return queryResult(query);
};

const QUERY = gql`
  query GetMe {
    getMe {
      id
      email
      nickname
      isEmailConfirmed
      registeredDate
    }
  }
`;
