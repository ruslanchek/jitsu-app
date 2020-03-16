import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';

const ADD_IMAGE = gql`
  mutation UploadProjectAvatar($file: Upload!, $projectId: String!) {
    uploadProjectAvatar(file: $file, projectId: $projectId) {
      url
    }
  }
`;

export const useUpload = () => {
  const [doUpload, { loading, error, data, called, client }] = useMutation(ADD_IMAGE);

  console.log(data)

  return {
    upload: async (file: File, projectId: string) => {
      console.log(file);
      await doUpload({
        variables: { file, projectId },
      });
    },
  };
};
