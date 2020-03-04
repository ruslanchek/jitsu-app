import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { Project } from '../models/project';
import { plainToClass } from 'class-transformer';

const GET_PROJECT = gql`
  query GetProject($projectId: String!) {
    getProject(projectId: $projectId) {
      id
      name
      documents {
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
  }
`;

interface IResult {
  loading: boolean;
  project: Project | undefined;
}

export const useProject = (projectId: string | undefined): IResult => {
  const { loading, error, data } = useQuery(GET_PROJECT, { variables: { projectId } });
  return { loading, project: plainToClass(Project, data?.getProject, { groups: ['query'] }) };
};
