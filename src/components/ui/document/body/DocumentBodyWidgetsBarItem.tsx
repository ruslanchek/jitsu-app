import React, { FC } from 'react';
import { css } from '@emotion/core';
import { darken } from 'polished';
import { COLORS } from '../../../../common/colors';
import { BORDER_RADIUS } from '../../../../common/ui';
import { EDocumentBodyWidget, IDocumentBodyWidget } from './document-body-widgets';
import { FiCheckCircle, FiCode, FiEdit3 } from 'react-icons/fi';

interface IProps {
  widget: IDocumentBodyWidget;
}

export const DocumentBodyWidgetsBarItem: FC<IProps> = ({ widget }) => {
  function renderIcon() {
    switch (widget.type) {
      case EDocumentBodyWidget.Code: {
        return <FiCode />;
      }
      case EDocumentBodyWidget.Subtasks: {
        return <FiCheckCircle />;
      }
      case EDocumentBodyWidget.Text: {
        return <FiEdit3 />;
      }
      default: {
        return null;
      }
    }
  }

  return (
    <div css={styles.root} title='Widget'>
      {renderIcon()}
    </div>
  );
};

const styles = {
  root: css`
    width: 40px;
    height: 40px;
    background-color: ${COLORS.SNOW};
    border-radius: ${BORDER_RADIUS.SMALL};
    color: ${COLORS.HIGH_SMOKE};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: move;
    user-select: none;
    margin: 10px;
    font-size: 20px;
    transition: background-color 0.2s;

    &:first-of-type {
      margin-top: 0;
    }

    &:last-of-type {
      margin-bottom: 0;
    }

    &:hover {
      background-color: ${darken(0.05, COLORS.SNOW)};
    }
  `,
};
