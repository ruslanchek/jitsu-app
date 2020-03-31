import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { DocumentModel, DocumentMutationModel } from '../models/document';
import { plainToClass } from 'class-transformer';
import { useGraphQLResult } from './useGraphQLResult';

export const useChangeDocument = () => {
  const [changeDocument, { loading }] = useMutation(QUERY);
  const graphQLResult = useGraphQLResult(DocumentModel, 'changeDocument');
  return {
    loading,
    changeDocument: async (documentId: string, input: Partial<DocumentMutationModel>) => {
      return graphQLResult(
        changeDocument({
          variables: {
            documentId,
            input: plainToClass(DocumentMutationModel, input),
          },
        }),
      );
    },
  };
};

const QUERY = gql`
  mutation ChangeDocument($documentId: String!, $input: DocumentChangeInput!) {
    changeDocument(documentId: $documentId, input: $input) {
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
