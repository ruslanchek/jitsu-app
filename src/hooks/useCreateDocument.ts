import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { DocumentModel, DocumentMutationModel } from '../models/document';
import { plainToClass } from 'class-transformer';
import { useMutationResult } from './useMutationResult';

export const useCreateDocument = () => {
  const [createDocument, { loading }] = useMutation(QUERY);
  const mutationResult = useMutationResult(DocumentModel, 'createDocument');
  return {
    loading,
    createDocument: async (projectId: string, input: Partial<DocumentMutationModel>) => {
      return await mutationResult(
        createDocument({
          variables: {
            projectId,
            input: plainToClass(DocumentMutationModel, input),
          },
        }),
      );
    },
  };
};

const QUERY = gql`
  mutation($projectId: String!, $input: DocumentCreateInput!) {
    createDocument(projectId: $projectId, input: $input) {
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
