import React, { FC, useState } from 'react';
import { css } from '@emotion/core';
import { useUploadProjectAvatar } from '../../hooks/useUploadProjectAvatar';
import { ProjectModel } from '../../models/project';

interface IProps {
  project: ProjectModel;
}

export const ProjectUploadAvatar: FC<IProps> = ({ project }) => {
  const upload = useUploadProjectAvatar();
  const [file, setFile] = useState<File>();
  const [result, setResult] = useState<string>();

  return (
    <div css={styles.root}>
      <form
        onSubmit={async e => {
          e.preventDefault();
          if (file) {
            setResult(await upload(project.id, file));
          }
        }}>
        <input
          type='file'
          onChange={a => {
            if (a.target.files) {
              setFile(a?.target?.files[0]);
            }
          }}
        />
        <button type='submit'>Upload</button>
        {result}
        {result && <img src={result} width={200} />}
      </form>
    </div>
  );
};

const styles = {
  root: css``,
};
