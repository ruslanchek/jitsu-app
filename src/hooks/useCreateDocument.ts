import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { DocumentModel, DocumentMutationModel } from '../models/document';
import { plainToClass } from 'class-transformer';

const CREATE_DOCUMENT = gql`
  mutation CreateDocument($projectId: String!, $input: DocumentCreateInput!) {
    createDocument(projectId: $projectId, input: $input) {
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

export const useCreateDocument = () => {
  const [createDocument, { loading, error }] = useMutation(CREATE_DOCUMENT);
  return {
    loading,
    createDocument: async (projectId: string, input: Partial<DocumentMutationModel>): Promise<DocumentModel> => {
      const result = await createDocument({
        variables: {
          projectId,
          input: plainToClass(DocumentMutationModel, input),
        },
      });

      return result.data.createDocument;
    },
  };
};
