import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { plainToClass } from 'class-transformer';
import { InviteModel } from '../models/invite';

const GET_INVITE = gql`
  query GetInvite($inviteCode: String!) {
    getInvite(inviteCode: $inviteCode) {
      id
    }
  }
`;

export const useInvite = (inviteCode: string | undefined) => {
  const { loading, error, data } = useQuery(GET_INVITE, { variables: { inviteCode } });
  return { loading, invite: plainToClass(InviteModel, data?.getInvite) };
};
