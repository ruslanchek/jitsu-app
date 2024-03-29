import { gql } from 'apollo-boost';
import { useQuery, useSubscription } from '@apollo/react-hooks';
import { plainToClass } from 'class-transformer';
import { ConversationModel } from '../models/conversation';
import { updateList } from 'update-data';
import { useEffect, useState } from 'react';

const QUERY = gql`
  query GetConversations($documentId: String!) {
    getConversations(documentId: $documentId) {
      id
      text
      date
      user {
        id
        nickname
      }
    }
  }
`;

const SUBSCRIPTION = gql`
  subscription ConversationCreated {
    conversationCreated {
      id
      text
      date
      user {
        id
        nickname
      }
    }
  }
`;

const update = (a: ConversationModel[], b: ConversationModel[]) => {
  return updateList<ConversationModel>(
    a,
    b,
    (docOld, docNew) => docNew.id === docOld.id,
    (docOld, docNew) => docNew.date > docOld.date,
  ).sort((a, b) => a.date.getTime() - b.date.getTime());
};

export const useConversations = (documentId: string) => {
  const { loading, data: queryData } = useQuery(QUERY, { variables: { documentId } });
  const { data: subscriptionData } = useSubscription(SUBSCRIPTION);
  const [conversations, setConversations] = useState<ConversationModel[]>([]);

  useEffect(() => {
    if (queryData?.getConversations) {
      setConversations(
        plainToClass<ConversationModel, ConversationModel>(ConversationModel, queryData.getConversations),
      );
    }

    if (subscriptionData?.conversationCreated) {
      setConversations(
        update(
          conversations,
          plainToClass<ConversationModel, ConversationModel>(ConversationModel, [subscriptionData.conversationCreated]),
        ),
      );
    }
  }, [subscriptionData, queryData]);

  return {
    loading,
    conversations,
  };
};
