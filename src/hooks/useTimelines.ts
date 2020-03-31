import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { plainToClass } from 'class-transformer';
import { TimelineModel } from '../models/timeline';

export const useTimelines = (documentId: string) => {
  const { loading, data } = useQuery(QUERY, {
    variables: {
      documentId,
    },
  });

  return {
    loading,
    timelines: plainToClass<TimelineModel, TimelineModel>(TimelineModel, data.getTimelines),
  };
};

const QUERY = gql`
  query GetTimelines($documentId: String!) {
    getTimelines(documentId: $documentId) {
      id
      date
      eventName
    }
  }
`;
