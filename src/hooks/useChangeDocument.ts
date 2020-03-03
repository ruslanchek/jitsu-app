import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { Document } from '../models/document';

const CHANGE_DOCUMENT = gql`
  mutation ChangeDocument($id: ID!, $name: String) {
    changeDocument(getByIdInput: { id: $id }, input: { name: $name }) {
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
          getByIdInput: { id },
          input,
        },
      });

      return result.data.changeDocument;
    },
  };
};
