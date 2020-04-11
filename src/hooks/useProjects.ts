import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { ProjectModel } from '../models/project';
import { useQueryResult } from './useQueryResult';

export const useProjects = () => {
  const query = useQuery(QUERY);
  const queryResult = useQueryResult(ProjectModel, 'getProjects');
  return queryResult<ProjectModel[]>(query);
};

const QUERY = gql`
  query GetProjects {
    getProjects {
      id
      name
      avatar
    }
  }
`;
