import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { TimelineModel } from '../models/timeline';
import { useQueryResult } from './useQueryResult';

export const useTimelines = (documentId: string) => {
  const query = useQuery(QUERY, {
    variables: { documentId },
  });
  const queryResult = useQueryResult(TimelineModel, 'getTimelines');
  return queryResult<TimelineModel[]>(query);
};

const QUERY = gql`
  query($documentId: String!) {
    getTimelines(documentId: $documentId) {
      id
      date
      eventName
    }
  }
`;
