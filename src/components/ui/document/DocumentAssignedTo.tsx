import React, { FC } from 'react';
import { css } from '@emotion/core';
import { rgba } from 'polished';
import { COLORS } from '../../../common/colors';
import { EPhrase } from '../../../locales/EPhrase';
import { BORDER_RADIUS } from '../../../common/ui';
import { DocumentToolBarItem } from './DocumentToolBarItem';

interface IProps {
  user: string;
}

export const DocumentAssignedTo: FC<IProps> = ({ user }) => {
  return (
    <DocumentToolBarItem label={EPhrase.Document_Assigned_to}>
      <a css={styles.user} href='/'>
        @{user}
      </a>
    </DocumentToolBarItem>
  );
};

const styles = {
  user: css`
    background-color: ${rgba(COLORS.SMOKE, 0.15)};
    color: ${COLORS.SMOKE};
    padding: 2px 5px;
    border-radius: ${BORDER_RADIUS.SMALL};
    transition: background-color 0.2s;

    &:hover {
      background-color: ${rgba(COLORS.SMOKE, 0.25)};
    }
  `,
};
