import React, { FC } from 'react';
import { css } from '@emotion/core';
import { RouteComponentProps } from '@reach/router';

export const NotFoundScreen: FC<RouteComponentProps> = () => {
  return <div css={styles.root}>Not found</div>;
};

const styles = {
  root: css``,
};
