import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { UserMeModel, UserModel } from '../models/user';
import { plainToClass } from 'class-transformer';

const GET_ME = gql`
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

export const useMe = () => {
  const { data, error, loading } = useQuery(GET_ME);
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
