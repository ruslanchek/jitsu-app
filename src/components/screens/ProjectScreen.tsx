import React, { FC } from 'react';
import { css } from '@emotion/core';
import { RouteComponentProps } from '@reach/router';
import { ScreenWrapper } from '../common/ScreenWrapper';
import { useProject } from '../../hooks/useProject';

interface IProps extends RouteComponentProps {
  id?: string;
}

export const ProjectScreen: FC<IProps> = ({ id }) => {
  const { loading, project } = useProject(id);
  return (
    <ScreenWrapper>
      <div css={styles.root}>{project && project.name}</div>
    </ScreenWrapper>
  );
};

const styles = {
  root: css`
    overflow: scroll;
    height: 100vh;
    width: 100vw;
  `,

  side: css`
    width: 220px;
    min-width: 220px;
    position: relative;
  `,

  main: css`
    padding: 40px 0;
  `,
};
