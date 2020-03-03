import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { Document } from '../models/document';

const CHANGE_DOCUMENT = gql`
  mutation ChangeDocument($id: ID!, $input: DocumentChangeInput!) {
    changeDocument(getByIdInput: { id: $id }, input: $input) {
      id
      name
    }
  }
`;

interface IResult {
  loading: boolean;
  changeDocument: (id: string, input: Partial<Document>) => Promise<Document | undefined>;
}

export const useChangeDocument = (): IResult => {
  const [changeDocument, { loading, error }] = useMutation(CHANGE_DOCUMENT);
  return {
    loading,
    changeDocument: async (id: string, input: Partial<Document>): Promise<Document> => {
      const result = await changeDocument({
        variables: {
          id,
          input,
        },
      });

      return result.data.changeDocument;
    },
  };
};
