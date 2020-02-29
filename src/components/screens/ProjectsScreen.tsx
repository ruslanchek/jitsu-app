import React, { FC } from 'react';
import { css } from '@emotion/core';
import { Link, RouteComponentProps } from '@reach/router';
import { ScreenWrapper } from '../common/ScreenWrapper';
import { useMyProjects } from '../../hooks/useMyProjects';
import { PATHS } from '../../common/paths';

interface IProps extends RouteComponentProps {}

export const ProjectsScreen: FC<IProps> = () => {
  const { loading, projects } = useMyProjects();
  return (
    <ScreenWrapper>
      <div css={styles.root}>
        <div css={styles.side}></div>
        <div css={styles.main}>
          {projects.map(project => (
            <div key={project.id}>
              <Link to={PATHS.PROJECT.replace(':id', project.id)}>{project.id}</Link>
              {project.name}
              ({project.documents?.length})
            </div>
          ))}
        </div>
      </div>
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
