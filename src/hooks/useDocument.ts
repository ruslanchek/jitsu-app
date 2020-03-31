import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { DocumentModel } from '../models/document';
import { plainToClass } from 'class-transformer';

export const useDocument = (documentId: string | undefined) => {
  const { loading, data } = useQuery(QUERY, {
    variables: { documentId },
  });
  return {
    loading,
    document: plainToClass(DocumentModel, data?.getDocument),
  };
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
