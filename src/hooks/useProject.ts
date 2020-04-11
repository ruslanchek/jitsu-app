import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { useQueryResult } from './useQueryResult';
import { ProjectModel } from '../models/project';

export const useProject = (projectId: string | undefined) => {
  const query = useQuery(QUERY, {
    variables: { projectId },
  });
  const queryResult = useQueryResult(ProjectModel, 'getProject');
  return queryResult(query);
};

const QUERY = gql`
  query GetProject($projectId: String!) {
    getProject(projectId: $projectId) {
      id
      name
      avatar
    }
  }
`;
