import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { ProjectModel } from '../models/project';
import { plainToClass } from 'class-transformer';

const GET_PROJECT = gql`
  query GetProject($projectId: String!) {
    getProject(projectId: $projectId) {
      id
      name
    }
  }
`;

interface IResult {
  loading: boolean;
  project: ProjectModel | undefined;
}

export const useProject = (projectId: string | undefined): IResult => {
  const { loading, error, data } = useQuery(GET_PROJECT, { variables: { projectId } });
  return { loading, project: plainToClass(ProjectModel, data?.getProject, { groups: ['query'] }) };
};
