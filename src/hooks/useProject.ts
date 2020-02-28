import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { IProject } from '../interfaces/project';

const GET_MY_PROJECTS = gql`
  query ProjectEntity($id: ID!) {
    getProject(input: { id: $id }) {
      id
      name
    }
  }
`;

interface IResult {
  loading: boolean;
  project: IProject | undefined;
}

export const useProject = (id: string | undefined): IResult => {
  const { loading, error, data } = useQuery(GET_MY_PROJECTS, { variables: { id } });
  return { loading, project: data?.getProject };
};
