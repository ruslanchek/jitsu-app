import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { DocumentModel } from '../models/document';
import { useQueryResult } from './useQueryResult';

export const useDocuments = (projectId: string | undefined) => {
  const query = useQuery(QUERY, {
    variables: { projectId },
  });
  const queryResult = useQueryResult(DocumentModel, 'getDocuments');
  console.log(query.loading, query.data);

  return queryResult<DocumentModel[]>(query);
};

const QUERY = gql`
  query($projectId: String!) {
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
