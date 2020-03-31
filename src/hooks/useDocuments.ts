import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { DocumentModel } from '../models/document';
import { plainToClass } from 'class-transformer';

export const useDocuments = (projectId: string | undefined) => {
  const { loading, data } = useQuery(QUERY, {
    variables: { projectId },
  });
  let documents: DocumentModel[] = [];
  if (data?.getDocuments) {
    documents = plainToClass<DocumentModel, DocumentModel>(DocumentModel, data.getDocuments);
  }
  return { loading, documents };
};

const QUERY = gql`
  query GetDocuments($projectId: String!) {
    getDocuments(projectId: $projectId) {
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
