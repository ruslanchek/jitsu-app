import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { UserMeModel, UserModel } from '../models/user';
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
  let user: UserMeModel | undefined = undefined;

  if (data?.me) {
    user = plainToClass(UserMeModel, data.me);
  }

  return {
    user,
    loading,
    error,
  };
};
