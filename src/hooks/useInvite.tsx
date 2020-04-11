import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { InviteModel } from '../models/invite';
import { useQueryResult } from './useQueryResult';

export const useInvite = (inviteCode: string | undefined) => {
  const query = useQuery(QUERY, {
    variables: { inviteCode },
  });
  const queryResult = useQueryResult(InviteModel, 'getInvite');
  return queryResult(query);
};

const QUERY = gql`
  query GetInvite($inviteCode: String!) {
    getInvite(inviteCode: $inviteCode) {
      id
    }
  }
`;
