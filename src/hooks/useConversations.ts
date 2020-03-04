import { gql } from 'apollo-boost';
import { useQuery, useSubscription } from '@apollo/react-hooks';
import { plainToClass } from 'class-transformer';
import { CT_GROUPS } from '../common/class-transformer';
import { Conversation } from '../models/conversation';
import { updateList } from 'update-data';
import { useEffect, useRef, useState } from 'react';

const GET_CONVERSATIONS = gql`
  query GetConversations($documentId: ID!) {
    getConversations(documentIdInput: { id: $documentId }) {
      id
      text
      date
      user {
        id
      }
    }
  }
`;

const CONVERSATION_CREATED = gql`
  subscription ConversationCreated {
    conversationCreated {
      id
      text
      date
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

const update = (a: Conversation[], b: Conversation[]) => {
  return updateList<Conversation>(
    a,
    b,
    (docOld, docNew) => docNew.id === docOld.id,
    (docOld, docNew) => docNew.date > docOld.date,
  ).sort((a, b) => b.date.getTime() - a.date.getTime());
};

export const useConversations = (documentId: string): IResult => {
  const { loading, error, data: queryData } = useQuery(GET_CONVERSATIONS, { variables: { documentId } });
  const { data: subscriptionData } = useSubscription(CONVERSATION_CREATED);
  const [conversations, setConversations] = useState<Conversation[]>([]);

  useEffect(() => {
    if (queryData?.getConversations) {
      setConversations(plainToClass<Conversation, Conversation>(Conversation, queryData?.getConversations, {
        groups: CT_GROUPS.QUERY,
      }));
    }

    if (subscriptionData?.conversationCreated) {
      setConversations(update(
        conversations,
        plainToClass<Conversation, Conversation>(Conversation, [subscriptionData?.conversationCreated], {
          groups: CT_GROUPS.QUERY,
        }),
      ));
    }
  }, [subscriptionData, queryData]);

  return {
    loading,
    conversations,
  };
};
