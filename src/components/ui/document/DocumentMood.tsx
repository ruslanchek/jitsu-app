import React, { FC } from 'react';
import { css } from '@emotion/core';

interface IProps {
}

export const DocumentMood: FC<IProps> = () => {
  return (<div css={styles.root}>
    Mood: 👩‍🎤
  </div>);
};

const styles = {
  root: css``,
};