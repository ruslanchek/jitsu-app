import React, { FC } from 'react';
import { css } from '@emotion/core';
import { rgba } from 'polished';
import { COLORS } from '../../../common/colors';
import { EOLocale } from 'eo-locale';
import { EPhrase } from '../../../locales/EPhrase';
import { BORDER_RADIUS } from '../../../common/ui';

interface IProps {
  user: string;
}

export const DocumentAssignedTo: FC<IProps> = ({ user }) => {
  return (
    <div css={styles.root}>
      <span css={styles.label}>
        <EOLocale.Text id={EPhrase.Document_Assigned_to} />
      </span>
      &nbsp;
      <a css={styles.user} href='/'>
        @{user}
      </a>
    </div>
  );
};

const styles = {
  root: css``,

  label: css`
    color: ${COLORS.SMOKE};
  `,

  user: css`
    background-color: ${rgba(COLORS.SMOKE, 0.15)};
    color: ${COLORS.SMOKE};
    padding: 2px 5px;
    border-radius: ${BORDER_RADIUS.SMALL};
    transition: background-color .2s;
    
    &:hover {
      background-color: ${rgba(COLORS.SMOKE, 0.25)};
    }
  `,
};
