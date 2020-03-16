import React, { FC, useState } from 'react';
import { css } from '@emotion/core';
import { ScreenWrapper } from '../common/ScreenWrapper';
import { Link, RouteComponentProps } from '@reach/router';
import { PATHS } from '../../common/paths';
import { MAIN_PADDING } from '../../common/ui';
import { useUpload } from '../../hooks/useUpload';

export const MainScreen: FC<RouteComponentProps> = () => {
  const upload = useUpload();
  const [file, setFile] = useState<File>();

  return (
    <ScreenWrapper showHeader>
      {file?.name}
      <form
        onSubmit={e => {
          e.preventDefault();
          if (file) {
            upload( 'f0d0a0d7-17c5-495e-884d-92f4dca70208', file);
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
      </form>

      <div css={styles.root}>
        <Link to={PATHS.PROJECTS}>Projects</Link>
      </div>
    </ScreenWrapper>
  );
};

const styles = {
  root: css`
    padding: ${MAIN_PADDING.VERTICAL} 0;
  `,
};
