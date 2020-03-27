import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { plainToClass } from 'class-transformer';
import { InviteModel, InviteMutationModel } from '../models/invite';

const ACCEPT_INVITE = gql`
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

export const useAcceptInvite = () => {
  const [acceptInvite, { loading }] = useMutation(ACCEPT_INVITE);
  return {
    loading,
    acceptInvite: async (inviteCode: string): Promise<InviteModel> => {
      console.log(inviteCode)
      const result = await acceptInvite({
        variables: {
          inviteCode,
        },
      });
      return plainToClass(InviteModel, result.data.acceptInvite);
    },
  };
};
