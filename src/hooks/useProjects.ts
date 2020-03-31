import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { ProjectModel } from '../models/project';
import { plainToClass } from 'class-transformer';

export const useProjects = () => {
  const { loading, data } = useQuery(QUERY);
  let projects: ProjectModel[] = [];

  if (data?.getProjects) {
    projects = plainToClass<ProjectModel, ProjectModel>(ProjectModel, data.getProjects);
  }

  return {
    loading,
    projects,
  };
};

const QUERY = gql`
  query {
    getProjects {
      id
      name
      avatar
    }
  }
`;
