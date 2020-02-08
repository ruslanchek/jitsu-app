import React, { FC } from 'react';
import { css } from '@emotion/core';
import { EOLocale } from 'eo-locale';
import { COLORS } from '../../../../common/colors';
import { DOCUMENT_BUTTON_HEIGHT } from '../../../../common/ui';

interface IProps {
  label?: string;
}

export const DocumentHeaderBarItem: FC<IProps> = ({ label, children }) => {
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
    white-space: nowrap;
    display: flex;
    height: ${DOCUMENT_BUTTON_HEIGHT};
    align-items: center;
  `,

  label: css`
    color: ${COLORS.SMOKE};
    margin-right: 1ex;
    height: ${DOCUMENT_BUTTON_HEIGHT};
    line-height: ${DOCUMENT_BUTTON_HEIGHT};
    display: flex;
    align-items: center;
  `,
};
