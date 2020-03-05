import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { plainToClass } from 'class-transformer';
import { ConversationModel, ConversationMutationModel } from '../models/conversation';

const CREATE_CONVERSATION = gql`
  mutation CreateConversation($documentId: String!, $input: ConversationCreateInput!) {
    createConversation(documentId: $documentId, input: $input) {
      id
      text
      date
      user {
        id
      }
    }
  }
`;

export const useCreateConversation = () => {
  const [createConversation, { loading, error }] = useMutation(CREATE_CONVERSATION);
  return {
    loading,
    createConversation: async (documentId: string, input: Partial<ConversationMutationModel>): Promise<ConversationModel> => {
      const result = await createConversation({
        variables: {
          documentId,
          input: plainToClass(ConversationMutationModel, input),
        },
      });

      return result.data.createConversation;
    },
  };
};
