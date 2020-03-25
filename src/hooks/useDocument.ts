import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { DocumentModel } from '../models/document';
import { plainToClass } from 'class-transformer';

const GET_DOCUMENT = gql`
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

export const useDocument = (documentId: string | undefined) => {
  const { loading, error, data } = useQuery(GET_DOCUMENT, { variables: { documentId } });
  return { loading, document: plainToClass(DocumentModel, data?.getDocument) };
};
