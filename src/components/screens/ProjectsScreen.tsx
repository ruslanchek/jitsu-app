import React, { FC } from 'react';
import { css } from '@emotion/core';
import { Link, RouteComponentProps } from '@reach/router';
import { ScreenWrapper } from '../common/ScreenWrapper';
import { useProjects } from '../../hooks/useProjects';
import { MAIN_PADDING } from '../../common/ui';
import { ProjectsItem } from '../ui/projects/ProjectsItem';
import { COMMON_STYLES } from '../../common/common-styles';
import { FiPlus } from 'react-icons/fi';

interface IProps extends RouteComponentProps {}

export const ProjectsScreen: FC<IProps> = () => {
  const { loading, projects } = useProjects();
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <ScreenWrapper showHeader>
      <div css={styles.root}>
        <div css={styles.side}></div>
        <div css={styles.main}>
          <h1>All projects</h1>
          <div css={styles.projects}>
            <button css={COMMON_STYLES.ENTRIES_ITEM} className="accent">
              <FiPlus className="icon"/>
              <span className='title'>New project</span>
            </button>

            {projects.map(project => (
              <ProjectsItem project={project} key={project.id} />
            ))}
          </div>
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
    padding: ${MAIN_PADDING.VERTICAL} 0;
  `,

  projects: css`
    display: flex;
    flex-wrap: wrap;
  `,
};
