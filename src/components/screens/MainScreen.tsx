import React, { FC } from 'react';
import { css } from '@emotion/core';
import { ScreenWrapper } from '../common/ScreenWrapper';
import { Link, RouteComponentProps } from '@reach/router';
import { PATHS } from '../../common/paths';

export const MainScreen: FC<RouteComponentProps> = () => {
  return (
    <ScreenWrapper>
      <div css={styles.root}>
        <Link to={PATHS.PROJECTS}>Projects</Link>
      </div>
    </ScreenWrapper>
  );
};

const styles = {
  root: css`

  `,
};
