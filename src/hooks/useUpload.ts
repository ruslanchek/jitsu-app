import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { useState } from 'react';

const ADD_IMAGE = gql`
  mutation AddImage($input: Upload!) {
    addImage(input: $input)
  }
`;

export const useUpload = () => {
  const [doUpload, { loading, error, data, called, client }] = useMutation(ADD_IMAGE);
  const [progress, setProgress] = useState(0);

  return {
    upload: async (file: File) => {
      console.log(file);
      await doUpload({
        variables: { input: file },
        context: {
          fetchOptions: {
            useUpload: true,
            onProgress: (ev: ProgressEvent) => {
              setProgress(ev.loaded / ev.total);
            },
            onAbortPossible: (abortHandler: () => void) => {},
          },
        },
      });
    },
  };
};
