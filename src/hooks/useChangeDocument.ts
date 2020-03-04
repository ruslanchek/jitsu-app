import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { Document } from '../models/document';
import { plainToClass } from 'class-transformer';
import { CT_GROUPS } from '../common/class-transformer';

const CHANGE_DOCUMENT = gql`
  mutation ChangeDocument($documentId: String!, $input: DocumentChangeInput!) {
    changeDocument(documentId: $documentId, input: $input) {
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
  changeDocument: (id: string, input: Partial<Document>) => Promise<Document | undefined>;
}

export const useChangeDocument = (): IResult => {
  const [changeDocument, { loading, error }] = useMutation(CHANGE_DOCUMENT);
  return {
    loading,
    changeDocument: async (documentId: string, input: Partial<Document>): Promise<Document> => {
      const result = await changeDocument({
        variables: {
          documentId,
          input: plainToClass(Document, input, { groups: CT_GROUPS.MUTATION }),
        },
      });

      return result.data.changeDocument;
    },
  };
};
