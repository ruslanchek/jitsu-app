import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { plainToClass } from 'class-transformer';
import { CT_GROUPS } from '../common/class-transformer';
import { Conversation } from '../models/conversation';

const CREATE_CONVERSATION = gql`
  mutation CreateConversation($documentId: ID!, $input: ConversationCreateInput!) {
    createConversation(documentIdInput: { id: $documentId }, input: $input) {
      id
      text
      user {
        id
      }
    }
  }
`;

interface IResult {
  loading: boolean;
  createConversation: (documentId: string, input: Partial<Conversation>) => Promise<Conversation | undefined>;
}

export const useCreateDocument = (): IResult => {
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
