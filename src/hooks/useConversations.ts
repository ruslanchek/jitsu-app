import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { plainToClass } from 'class-transformer';
import { CT_GROUPS } from '../common/class-transformer';
import { Conversation } from '../models/conversation';

const GET_CONVERSATIONS = gql`
  query GetConversations($documentId: ID!) {
    getConversations(documentIdInput: { id: $documentId }) {
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
  conversations: Conversation[];
}

export const useConversations = (documentId: string): IResult => {
  const { loading, error, data } = useQuery(GET_CONVERSATIONS, { variables: { documentId } });
  return {
    loading,
    conversations: plainToClass<Conversation, Conversation[]>(Conversation, data?.getConversations, {
      groups: CT_GROUPS.QUERY,
    }),
  };
};
