import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { IProject } from '../interfaces/project';

const GET_MY_PROJECTS = gql`
  query {
    getMyProjects {
      id
      name
      documents {
        id
      }
    }
  }
`;

interface IResult {
  loading: boolean;
  projects: IProject[];
}

export const useMyProjects = (): IResult => {
  const { loading, error, data } = useQuery(GET_MY_PROJECTS);
  return { loading, projects: data?.getMyProjects || [] };
};
