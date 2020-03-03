import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { Project } from '../models/project';
import { plainToClass } from 'class-transformer';
import { CT_GROUPS } from '../common/class-transformer';

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
  projects: Project[];
}

export const useMyProjects = (): IResult => {
  const { loading, error, data } = useQuery(GET_MY_PROJECTS);
  return {
    loading,
    projects: plainToClass<Project, Project[]>(Project, data?.getMyProjects, { groups: CT_GROUPS.QUERY }),
  };
};
