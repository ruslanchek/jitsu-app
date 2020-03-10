import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { UserMeModel } from '../models/user';
import { plainToClass } from 'class-transformer';

const ME = gql`
  query Me {
    me {
      id
      email
      nickname
      isEmailConfirmed
      registeredDate
    }
  }
`;

export const useMe = () => {
  const { data, error, loading } = useQuery(ME);
  let me: UserMeModel | undefined = undefined;

  if (data?.me) {
    me = plainToClass(UserMeModel, data.me);
  }

  return {
    me,
    loading,
    error,
  };
};
