import { gql } from 'apollo-boost';
import { useLazyQuery } from '@apollo/react-hooks';
import { UserMeModel } from '../models/user';
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

export const useGetMe = () => {
  const [getMe, { data, loading, error }] = useLazyQuery(GET_ME);
  let me: UserMeModel | undefined = undefined;

  if (data?.getMe) {
    me = plainToClass(UserMeModel, data.getMe);
  }

  return {
    getMe,
    me,
    loading,
    error,
  };
};
