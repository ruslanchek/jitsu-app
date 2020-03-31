import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { plainToClass } from 'class-transformer';
import { InviteModel } from '../models/invite';

export const useInvite = (inviteCode: string | undefined) => {
  const { loading, data } = useQuery(QUERY, {
    variables: { inviteCode },
  });
  return {
    loading,
    invite: plainToClass(InviteModel, data?.getInvite),
  };
};

const QUERY = gql`
  query GetInvite($inviteCode: String!) {
    getInvite(inviteCode: $inviteCode) {
      id
    }
  }
`;
