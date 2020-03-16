import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';

const ADD_IMAGE = gql`
  mutation AddImage($input: ProjectFileInput!) {
    addImage(input: $input)
  }
`;

export const useUpload = () => {
  const [doUpload, { loading, error, data, called, client }] = useMutation(ADD_IMAGE);

  console.log(loading, error, data);

  return {
    upload: async (file: File) => {
      console.log(file);
      await doUpload({ variables: { input: { file } } });
    },
  };
};
