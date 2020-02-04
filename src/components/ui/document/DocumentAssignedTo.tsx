import React, { FC } from 'react';
import { css } from '@emotion/core';
import { rgba } from 'polished';
import { COLORS } from '../../../common/colors';

interface IProps {
  user: string;
}

export const DocumentAssignedTo: FC<IProps> = ({ user }) => {
  return (
    <div css={styles.root}>
      Assigned to{' '}
      <a css={styles.user} href='#'>
        @{user}
      </a>
    </div>
  );
};

const styles = {
  root: css``,

  user: css`
    background-color: ${rgba(COLORS.PURPLE, 0.15)};
    color: ${COLORS.PURPLE};
    padding: 1px 5px 2px;
    border-radius: 4px;
  `,
};
