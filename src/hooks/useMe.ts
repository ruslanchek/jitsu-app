import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { UserMeModel } from '../models/user';
import { plainToClass } from 'class-transformer';

export const useMe = () => {
  const { data, error, loading } = useQuery(QUERY);
  let me: UserMeModel | undefined = undefined;

  if (data?.getMe) {
    me = plainToClass(UserMeModel, data.getMe);
  }

  return {
    me,
    loading,
    error,
  };
};

const QUERY = gql`
  query Me {
    getMe {
      id
      email
      nickname
      isEmailConfirmed
      registeredDate
    }
  }
`;
