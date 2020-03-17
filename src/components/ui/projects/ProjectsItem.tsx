import React, { FC } from 'react';
import { css } from '@emotion/core';
import { PATHS } from '../../../common/paths';
import { COMMON_STYLES } from '../../../common/common-styles';
import { ProjectModel } from '../../../models/project';
import { Link } from '@reach/router';
import Img from 'react-image'

interface IProps {
  project: ProjectModel;
}

export const ProjectsItem: FC<IProps> = ({ project }) => {
  return (
    <Link css={COMMON_STYLES.ENTRIES_ITEM} to={PATHS.PROJECT_TASKS.replace(':projectId', project.id)}>
      <Img
        className='icon'
        src={project.avatar.map(a => a.url)}
      />
      <span className='title'>{project.name}</span>
    </Link>
  );
};

const styles = {
  root: css``,
};
