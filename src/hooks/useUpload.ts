import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';

const ADD_IMAGE = gql`
  mutation AddImage($file: Upload!) {
    addImage(image: $file)
  }
`;

export const useUpload = () => {
  const [doUpload, { loading, error, data, called, client }] = useMutation(ADD_IMAGE);

  console.log(loading, error, data);

  return {
    upload: async (file: File) => {
      console.log(file)
      await doUpload({ variables: { file } });
    },
  };
};
