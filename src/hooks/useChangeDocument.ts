import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { DocumentModel, DocumentMutationModel } from '../models/document';
import { plainToClass } from 'class-transformer';

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

export const useChangeDocument = () => {
  const [changeDocument, { loading, error }] = useMutation(CHANGE_DOCUMENT);
  return {
    loading,
    changeDocument: async (documentId: string, input: Partial<DocumentMutationModel>): Promise<DocumentModel> => {
      const result = await changeDocument({
        variables: {
          documentId,
          input: plainToClass(DocumentMutationModel, input),
        },
      });

      return result.data.changeDocument;
    },
  };
};
