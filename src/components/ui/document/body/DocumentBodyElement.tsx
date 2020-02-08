import React, { FC, useState } from 'react';
import { css } from '@emotion/core';
import { Draggable } from 'react-beautiful-dnd';
import { BORDER_RADIUS } from '../../../../common/ui';
import classNames from 'classnames';
import { rgba } from 'polished';
import { COLORS } from '../../../../common/colors';
import { FaExpandArrowsAlt, FaTrash, FaTrashAlt } from 'react-icons/all';
import { CSSTransition } from 'react-transition-group';

interface IProps {
  id: string;
  index: number;
}

const ANIMATION_TIME = 200;

export const DocumentBodyElement: FC<IProps> = ({ id, index, children }) => {
  const [hover, setHover] = useState(false);

  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => (
        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          css={styles.root}
          className={classNames({ dragging: snapshot.isDragging })}
          ref={provided.innerRef}
          {...provided.draggableProps}>
          {children}

          <div css={styles.actionsHolder}>
            <CSSTransition
              unmountOnExit
              appear
              in={hover || snapshot.isDragging}
              timeout={ANIMATION_TIME}
              css={styles.actionsAnimations}>
              <div>
                <div css={styles.propertyAction} {...provided.dragHandleProps}>
                  <FaExpandArrowsAlt />
                </div>
                <div className="danger clickable" css={styles.propertyAction}>
                  <FaTrashAlt />
                </div>
              </div>
            </CSSTransition>
          </div>
        </div>
      )}
    </Draggable>
  );
};

const styles = {
  root: css`
    margin-bottom: 30px;
    border-radius: ${BORDER_RADIUS.MEDIUM};
    transition: box-shadow 0.2s;
    position: relative;

    &.dragging {
      box-shadow: 0 5px 35px ${rgba(COLORS.PLATINUM, 0.1)};
    }
  `,

  actionsHolder: css`
    position: absolute;
    width: 30px;
    min-height: 100%;
    left: -40px;
    padding: 6px 5px;
    top: 0;
  `,

  actionsAnimations: css`
    &.enter {
      opacity: 0;
    }

    &.enter-active {
      opacity: 1;
      transition: opacity 0.2s;
    }

    &.exit {
      opacity: 1;
    }

    &.exit-active {
      opacity: 0;
      transition: opacity 0.2s;
    }
  `,

  propertyAction: css`
    width: 30px;
    height: 30px;
    border-radius: ${BORDER_RADIUS.SMALL};
    background-color: transparent;
    color: ${COLORS.CARBON};
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.2s, color 0.2s;

    &:hover {
      background-color: ${COLORS.SNOW};
      color: ${COLORS.SMOKE};
    }

    &:active {
      color: ${COLORS.HIGH_SMOKE};
    }
    
    &.danger {
      &:hover {
        background-color: ${rgba(COLORS.FIRE_ROSE, .05)};
        color: ${COLORS.FIRE_ROSE};
      }
    }
    
    &.clickable {
      cursor: pointer;
    }
  `,
};
