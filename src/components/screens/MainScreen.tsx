import React, { FC } from 'react';
import { css } from '@emotion/core';
import { ScreenWrapper } from '../common/ScreenWrapper';
import { Link, RouteComponentProps } from '@reach/router';
import { PATHS } from '../../common/paths';
import { MAIN_PADDING } from '../../common/ui';

export const MainScreen: FC<RouteComponentProps> = () => {
  return (
    <ScreenWrapper showHeader>
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
