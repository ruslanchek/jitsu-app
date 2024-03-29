import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { plainToClass } from 'class-transformer';
import { InviteModel, InviteMutationModel } from '../models/invite';
import { useMutationResult } from './useMutationResult';

export const useCreateInvite = () => {
  const [createInvite, { loading }] = useMutation(QUERY);
  const mutationResult = useMutationResult(InviteModel, 'createInvite');
  return {
    loading,
    createInvite: async (projectId: string, input: Partial<InviteMutationModel>) => {
      return await mutationResult(
        createInvite({
          variables: {
            projectId,
            input: plainToClass(InviteMutationModel, input),
          },
        }),
      );
    },
  };
};

const QUERY = gql`
  mutation CreateInvite($projectId: String!, $input: InviteCreateInput!) {
    createInvite(projectId: $projectId, input: $input) {
      id
      active
      date
      project {
        id
        name
        avatar
      }
      invitedByUser {
        id
        nickname
        email
      }
    }
  }
`;
