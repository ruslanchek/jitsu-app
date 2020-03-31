import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { DocumentModel, DocumentMutationModel } from '../models/document';
import { plainToClass } from 'class-transformer';
import { useGraphQLResult } from './useGraphQLResult';
import { InviteModel } from '../models/invite';

export const useCreateDocument = () => {
  const [createDocument, { loading }] = useMutation(QUERY);
  const graphQLResult = useGraphQLResult(DocumentModel, 'createDocument');
  return {
    loading,
    createDocument: async (projectId: string, input: Partial<DocumentMutationModel>) => {
      return await graphQLResult(
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
  mutation CreateDocument($projectId: String!, $input: DocumentCreateInput!) {
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
