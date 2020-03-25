import React, { FC } from 'react';
import { css } from '@emotion/core';
import { PATHS } from '../../../common/paths';
import { COMMON_STYLES } from '../../../common/common-styles';
import { ProjectModel } from '../../../models/project';
import { Link } from '@reach/router';
import { ImageSet } from '../image/ImageSet';

interface IProps {
  project: ProjectModel;
}

export const ProjectsItem: FC<IProps> = ({ project }) => {
  return (
    <Link css={[COMMON_STYLES.ENTRIES_ITEM, styles.root]} to={PATHS.PROJECT_TASKS.replace(':projectId', project.id)}>
      <ImageSet className='icon' src={project.avatar} />
      <span className='title'>{project.name}</span>
    </Link>
  );
};

const styles = {
  root: css`
    .icon {
      border-radius: 4px;
    }
  `,
};
