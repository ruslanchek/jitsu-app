import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { DocumentModel } from '../models/document';
import { useQueryResult } from './useQueryResult';

export const useDocument = (documentId: string | undefined) => {
  const query = useQuery(QUERY, {
    variables: { documentId },
  });
  const queryResult = useQueryResult(DocumentModel, 'getDocument');
  return queryResult(query);
};

const QUERY = gql`
  query GetDocument($documentId: String!) {
    getDocument(documentId: $documentId) {
      id
      name
      data
      type
      status
      priority
      dueDate
    }
  }
`;
