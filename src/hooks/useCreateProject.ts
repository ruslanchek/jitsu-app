import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { ProjectModel, ProjectMutationModel } from '../models/project';
import { plainToClass } from 'class-transformer';
import { useMutationResult } from './useMutationResult';

export const useCreateProject = () => {
  const [createProject, { loading }] = useMutation(QUERY);
  const mutationResult = useMutationResult(ProjectModel, 'createProject');
  return {
    loading,
    createProject: async (input: Partial<ProjectMutationModel>) => {
      return await mutationResult(
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
  mutation($input: ProjectCreateInput!) {
    createProject(input: $input) {
      id
      name
    }
  }
`;
