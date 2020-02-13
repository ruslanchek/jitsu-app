import React, { FC } from 'react';
import { css } from '@emotion/core';
import { COLORS } from '../../../../common/colors';
import { BORDER_RADIUS } from '../../../../common/ui';
import { DocumentBodyWidgetsBarItem } from './DocumentBodyWidgetsBarItem';
import { DOCUMENT_BODY_WIDGETS } from './document-body-widgets';

interface IProps {}

export const DocumentBodyWidgetsBar: FC<IProps> = () => {
  return (
    <div css={styles.root}>
      {DOCUMENT_BODY_WIDGETS.map(widget => (
        <DocumentBodyWidgetsBarItem key={widget.id} widget={widget} />
      ))}
    </div>
  );
};

const styles = {
  root: css`
    padding: 10px 0;
    width: 60px;
    box-sizing: border-box;
    border: 1px solid ${COLORS.DIRTY_SNOW};
    border-radius: ${BORDER_RADIUS.MEDIUM};
  `,
};
