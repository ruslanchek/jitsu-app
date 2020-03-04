import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { Document } from '../models/document';
import { plainToClass } from 'class-transformer';
import { CT_GROUPS } from '../common/class-transformer';

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

interface IResult {
  loading: boolean;
  createDocument: (projectId: string, input: Partial<Document>) => Promise<Document | undefined>;
}

export const useCreateDocument = (): IResult => {
  const [createDocument, { loading, error }] = useMutation(CREATE_DOCUMENT);
  return {
    loading,
    createDocument: async (projectId: string, input: Partial<Document>): Promise<Document> => {
      const result = await createDocument({
        variables: {
          projectId,
          input: plainToClass(Document, input, { groups: CT_GROUPS.MUTATION }),
        },
      });

      return result.data.createDocument;
    },
  };
};
