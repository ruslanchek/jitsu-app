import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { InviteModel } from '../models/invite';
import { useGraphQLResult } from './useGraphQLResult';

export const useAcceptInvite = () => {
  const [acceptInvite, { loading }] = useMutation(QUERY);
  const graphQLResult = useGraphQLResult(InviteModel, 'acceptInvite');
  return {
    loading,
    acceptInvite: async (inviteCode: string) => {
      return graphQLResult(
        acceptInvite({
          variables: {
            inviteCode,
          },
        }),
      );
    },
  };
};

const QUERY = gql`
  mutation AcceptInvite($inviteCode: String!) {
    acceptInvite(inviteCode: $inviteCode) {
      id
      active
      date
      project {
        id
        name
      }
    }
  }
`;
