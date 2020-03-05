import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { ProjectModel } from '../models/project';
import { plainToClass } from 'class-transformer';

const GET_PROJECTS = gql`
  query {
    getProjects {
      id
      name
    }
  }
`;

interface IResult {
  loading: boolean;
  projects: ProjectModel[];
}

export const useProjects = (): IResult => {
  const { loading, error, data } = useQuery(GET_PROJECTS);
  let projects: ProjectModel[] = [];

  if (data?.getProjects) {
    projects = plainToClass<ProjectModel, ProjectModel>(ProjectModel, data.getProjects);
  }

  return {
    loading,
    projects,
  };
};
