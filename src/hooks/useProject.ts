import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { ProjectModel } from '../models/project';
import { plainToClass } from 'class-transformer';

const GET_PROJECT = gql`
  query GetProject($projectId: String!) {
    getProject(projectId: $projectId) {
      id
      name
      avatar
    }
  }
`;

export const useProject = (projectId: string | undefined) => {
  const { loading, error, data } = useQuery(GET_PROJECT, { variables: { projectId } });
  return { loading, project: plainToClass(ProjectModel, data?.getProject) };
};
