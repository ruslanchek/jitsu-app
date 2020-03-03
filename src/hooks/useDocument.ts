import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { Document } from '../models/document';
import { plainToClass } from 'class-transformer';

const GET_DOCUMENT = gql`
  query GetDocument($id:ID!) {
    getDocument(input:{id:$id}) {
      id
      name
      dueDate
      status
      priority
      type
      project {
        id
        name
      }
    }
  }
`;

interface IResult {
  loading: boolean;
  document: Document | undefined;
}

export const useDocument = (id: string | undefined): IResult => {
  const { loading, error, data } = useQuery(GET_DOCUMENT, { variables: { id } });
  return { loading, document: plainToClass(Document, data?.getDocument) };
};
