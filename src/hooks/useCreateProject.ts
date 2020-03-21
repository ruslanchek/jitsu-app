import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { ProjectModel, ProjectMutationModel } from '../models/project';
import { plainToClass } from 'class-transformer';

const CREATE_DOCUMENT = gql`
  mutation CreateDocument($input: ProjectCreateInput!) {
    createProject(input: $input) {
      id
      name
    }
  }
`;

export const useCreateProject = () => {
  const [createProject, { loading }] = useMutation(CREATE_DOCUMENT);
  return {
    loading,
    createProject: async (input: Partial<ProjectMutationModel>): Promise<ProjectModel> => {
      const result = await createProject({
        variables: {
          input: plainToClass(ProjectMutationModel, input),
        },
      });

      return plainToClass(ProjectModel, result.data.createProject);
    },
  };
};
