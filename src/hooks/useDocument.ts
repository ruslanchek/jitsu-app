import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { Document } from '../models/document';
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
      project {
        id
      }
    }
  }
`;

interface IResult {
  loading: boolean;
  document: Document | undefined;
}

export const useDocument = (documentId: string | undefined): IResult => {
  const { loading, error, data } = useQuery(GET_DOCUMENT, { variables: { documentId } });
  return { loading, document: plainToClass(Document, data?.getDocument, { groups: ['query'] }) };
};
