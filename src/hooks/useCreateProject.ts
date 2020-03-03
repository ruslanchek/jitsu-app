import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { Project } from '../models/project';

const CREATE_DOCUMENT = gql`
  mutation CreateDocument($input: ProjectCreateInput!) {
    createProject(input: $input) {
      id
      name
      documents {
        id
        name
      }
    }
  }
`;

interface IResult {
  loading: boolean;
  createProject: (input: Partial<Project>) => Promise<Project | undefined>;
}

export const useCreateProject = (): IResult => {
  const [createProject, { loading, error }] = useMutation(CREATE_DOCUMENT);
  return {
    loading,
    createProject: async (input: Partial<Project>): Promise<Project> => {
      const result = await createProject({
        variables: {
          input,
        },
      });

      return result.data.createProject;
    },
  };
};
