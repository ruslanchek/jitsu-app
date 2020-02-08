import React, { FC } from 'react';
import example from '../../../../../assets/demo/example-html';
import { BORDER_RADIUS } from '../../../../../common/ui';
import { COLORS } from '../../../../../common/colors';
import { css } from '@emotion/core';

export const DocumentWidgetTextEditor: FC = () => {
  return (
    <div data-dragndrop={true}>
      <div css={styles.root} dangerouslySetInnerHTML={{ __html: example }} />
    </div>
  );
};

const styles = {
  root: css`
    background-color: ${COLORS.WHITE};
    border: 1px solid ${COLORS.DIRTY_SNOW};
    padding: 20px;
    margin-bottom: 0;
    border-radius: ${BORDER_RADIUS.MEDIUM};
  `,
};
