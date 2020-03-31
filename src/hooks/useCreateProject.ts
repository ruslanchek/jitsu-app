import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { ProjectModel, ProjectMutationModel } from '../models/project';
import { plainToClass } from 'class-transformer';
import { useGraphQLResult } from './useGraphQLResult';

export const useCreateProject = () => {
  const [createProject, { loading }] = useMutation(QUERY);
  const graphQLResult = useGraphQLResult(ProjectModel, 'createProject');
  return {
    loading,
    createProject: async (input: Partial<ProjectMutationModel>) => {
      return await graphQLResult(
        createProject({
          variables: {
            input: plainToClass(ProjectMutationModel, input),
          },
        }),
      );
    },
  };
};

const QUERY = gql`
  mutation CreateDocument($input: ProjectCreateInput!) {
    createProject(input: $input) {
      id
      name
    }
  }
`;
