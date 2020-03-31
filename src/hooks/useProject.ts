import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { ProjectModel } from '../models/project';
import { plainToClass } from 'class-transformer';

export const useProject = (projectId: string | undefined) => {
  const { loading, data } = useQuery(QUERY, {
    variables: { projectId },
  });
  return {
    loading,
    project: plainToClass(ProjectModel, data?.getProject),
  };
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
