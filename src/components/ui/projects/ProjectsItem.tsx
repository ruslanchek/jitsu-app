import React, { FC } from 'react';
import { css } from '@emotion/core';
import { ProjectModel } from '../../../models/project';
import { Link } from '@reach/router';
import { PATHS } from '../../../common/paths';
import { COMMON_STYLES } from '../../../common/common-styles';

interface IProps {
  project: ProjectModel;
}

export const ProjectsItem: FC<IProps> = ({ project }) => {
  return (
    <Link css={COMMON_STYLES.ENTRIES_ITEM} to={PATHS.PROJECT_TASKS.replace(':projectId', project.id)}>
      <img
        className='icon'
        src={project.avatar}
        alt={project.name}
      />
      <span className='title'>{project.name}</span>
    </Link>
  );
};

const styles = {
  root: css``,
};
