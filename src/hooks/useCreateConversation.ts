import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { plainToClass } from 'class-transformer';
import { CT_GROUPS } from '../common/class-transformer';
import { Conversation } from '../models/conversation';

const CREATE_CONVERSATION = gql`
  mutation CreateConversation($documentId: String!, $input: ConversationCreateInput!) {
    createConversation(documentId: $documentId, input: $input) {
      id
      text
      date
      user {
        id
      }
      document {
        id
      }
    }
  }
`;

export const useCreateConversation = () => {
  const [createConversation, { loading, error }] = useMutation(CREATE_CONVERSATION);
  return {
    loading,
    createConversation: async (documentId: string, input: Partial<Conversation>): Promise<Conversation> => {
      const result = await createConversation({
        variables: {
          documentId,
          input: plainToClass(Conversation, input, { groups: CT_GROUPS.MUTATION }),
        },
      });

      return result.data.createConversation;
    },
  };
};
