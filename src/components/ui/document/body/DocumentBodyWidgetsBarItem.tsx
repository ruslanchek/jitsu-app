import React, { FC } from 'react';
import { css } from '@emotion/core';
import { darken, rgba } from 'polished';
import { COLORS } from '../../../../common/colors';
import { BORDER_RADIUS, DOCUMENT_SIDE_TOOLS } from '../../../../common/ui';
import { EDocumentBodyWidget, IDocumentBodyWidget } from './document-body-widgets';
import { FiCheckSquare, FiCode, FiEdit3 } from 'react-icons/fi';
import classNames from 'classnames';
import { Draggable } from 'react-beautiful-dnd';

interface IProps {
  widget: IDocumentBodyWidget;
  index: number;
}

export const DocumentBodyWidgetsBarItem: FC<IProps> = ({ widget, index }) => {
  function renderIcon() {
    switch (widget.type) {
      case EDocumentBodyWidget.Code: {
        return <FiCode />;
      }
      case EDocumentBodyWidget.Subtasks: {
        return <FiCheckSquare />;
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
    <Draggable draggableId={widget.id} index={index}>
      {(provided, snapshot) => (
        <div css={styles.root} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          <div title='Widget' css={styles.icon} className={classNames({ dragging: snapshot.isDragging })}>
            {renderIcon()}
          </div>
        </div>
      )}
    </Draggable>
  );
};

const styles = {
  root: css`
    width: ${DOCUMENT_SIDE_TOOLS.WIDGET_SIZE};
    height: ${DOCUMENT_SIDE_TOOLS.WIDGET_SIZE};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
  `,

  icon: css`
    width: ${DOCUMENT_SIDE_TOOLS.WIDGET_SIZE};
    height: ${DOCUMENT_SIDE_TOOLS.WIDGET_SIZE};
    background-color: ${COLORS.SNOW};
    border-radius: ${BORDER_RADIUS.MEDIUM};
    color: ${COLORS.SMOKE};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: move;
    user-select: none;
    font-size: 20px;
    transition: background-color 0.2s;

    &:hover {
      background-color: ${darken(0.05, COLORS.SNOW)};
      color: ${COLORS.HIGH_SMOKE};
    }

    &.dragging {
      box-shadow: 0 5px 20px ${rgba(COLORS.PLATINUM, 0.125)};
      color: ${COLORS.HIGH_SMOKE};
    }
  `,
};
