import React, { FC, useEffect, useState } from 'react';
import { css } from '@emotion/core';
import { Draggable } from 'react-beautiful-dnd';
import { BORDER_RADIUS } from '../../../../common/ui';
import classNames from 'classnames';
import { rgba } from 'polished';
import { COLORS } from '../../../../common/colors';
import { FaExpandArrowsAlt, FaTrashAlt } from 'react-icons/all';

interface IProps {
  id: string;
  index: number;
  isAnotherElementDragging: boolean;
}

export const DocumentBodyElement: FC<IProps> = ({ id, index, isAnotherElementDragging, children }) => {
  const [hover, setHover] = useState(false);

  useEffect(() => {
    setHover(false);
  }, [isAnotherElementDragging]);

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
            {((hover && !isAnotherElementDragging) || snapshot.isDragging) && (
              <div css={styles.propertyAction} {...provided.dragHandleProps}>
                <FaExpandArrowsAlt />
              </div>
            )}

            {hover && !isAnotherElementDragging && !snapshot.isDragging && (
              <div className='danger clickable' css={styles.propertyAction}>
                <FaTrashAlt />
              </div>
            )}
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
    display: none;

    &.enter {
      opacity: 0;
      display: block;
    }

    &.enter-active {
      opacity: 1;
      transition: opacity 0.2s;
      display: block;
    }

    &.enter-done {
      opacity: 1;
      display: block;
    }

    &.exit {
      opacity: 1;
      display: block;
    }

    &.exit-active {
      opacity: 0;
      transition: opacity 0.2s;
      display: block;
    }

    &.exit-done {
      opacity: 0;
      display: none;
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
      color: ${COLORS.SMOKE};
    }

    &:active {
      color: ${COLORS.HIGH_SMOKE};
    }

    &.danger {
      &:hover {
        color: ${COLORS.FIRE_ROSE};
      }
    }

    &.clickable {
      cursor: pointer;
    }
  `,
};
