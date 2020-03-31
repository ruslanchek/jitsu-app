import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { plainToClass } from 'class-transformer';
import { ConversationModel, ConversationMutationModel } from '../models/conversation';
import { useGraphQLResult } from './useGraphQLResult';

export const useCreateConversation = () => {
  const [createConversation, { loading }] = useMutation(QUERY);
  const graphQLResult = useGraphQLResult(ConversationModel, 'createConversation');
  return {
    loading,
    createConversation: async (documentId: string, input: Partial<ConversationMutationModel>) => {
      return await graphQLResult(
        createConversation({
          variables: {
            documentId,
            input: plainToClass(ConversationMutationModel, input),
          },
        }),
      );
    },
  };
};

const QUERY = gql`
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
