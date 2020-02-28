import React, { FC } from 'react';
import { css } from '@emotion/core';
import { Link, RouteComponentProps } from '@reach/router';
import { PATHS } from '../../common/paths';

interface IProps extends RouteComponentProps {}

export const ProjectsScreen: FC<IProps> = () => {
  return (
    <div css={styles.root}>
      xxx <Link to={PATHS.MAIN}>Main</Link>
    </div>
  );
};

const styles = {
  root: css``,
};
