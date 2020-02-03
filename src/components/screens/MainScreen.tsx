import React, { FC } from 'react';
import { css } from '@emotion/core';
import { EditorView } from '../ui/editor/EditorView';

export const MainScreen: FC = () => {
  return (
    <div css={styles.root}>
      <EditorView />
    </div>
  );
};

const styles = {
  root: css`
    padding: 40px;
  `,
};
