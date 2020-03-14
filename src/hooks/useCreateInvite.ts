import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { plainToClass } from 'class-transformer';
import { InviteModel, InviteMutationModel } from '../models/invite';

const CREATE_INVITE = gql`
  mutation CreateDocument($projectId: String!, $input: InviteCreateInput!) {
    createInvite(projectId: $projectId, input: $input) {
      id
      invitedByUser {
        id
      }
      invitedUser {
        id
      }
      project {
        id
      }
    }
  }
`;

export const useCreateInvite = () => {
  const [createInvite, { loading, error }] = useMutation(CREATE_INVITE);
  return {
    loading,
    createInvite: async (projectId: string, input: Partial<InviteMutationModel>): Promise<InviteModel> => {
      const result = await createInvite({
        variables: {
          projectId,
          input: plainToClass(InviteMutationModel, input),
        },
      });
      return result.data.createDocument;
    },
  };
};
