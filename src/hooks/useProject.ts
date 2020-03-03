import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { Project } from '../models/project';
import { plainToClass } from 'class-transformer';

const GET_PROJECT = gql`
  query GetProject($id: ID!) {
    getProject(input: { id: $id }) {
      id
      name
      documents {
        id
        name
        type
        status
        priority
        dueDate
      }
    }
  }
`;

interface IResult {
  loading: boolean;
  project: Project | undefined;
}

export const useProject = (id: string | undefined): IResult => {
  const { loading, error, data } = useQuery(GET_PROJECT, { variables: { id } });
  return { loading, project: plainToClass(Project, data?.getProject, { groups: ['query'] }) };
};
