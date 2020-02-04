import React, { FC } from 'react';
import { css } from '@emotion/core';

interface IProps {
  user: string;
}

export const DocumentAssignedTo: FC<IProps> = ({ user }) => {
  return <div css={styles.root}>Assigned to @{user}</div>;
};

const styles = {
  root: css``,
};
