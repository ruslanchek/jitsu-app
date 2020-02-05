import React, { FC } from 'react';
import { css } from '@emotion/core';
import { EOLocale } from 'eo-locale';
import { COLORS } from '../../../common/colors';

interface IProps {
  label?: string;
}

export const DocumentToolBarItem: FC<IProps> = ({ label, children }) => {
  return (
    <div css={styles.root}>
      {label && (
        <span css={styles.label}>
          <EOLocale.Text id={label} />
        </span>
      )}
      {children}
    </div>
  );
};

const styles = {
  root: css`
    margin-right: 20px;
    white-space: nowrap;
  `,

  label: css`
    color: ${COLORS.SMOKE};
    margin-right: 1ex;
  `,
};
