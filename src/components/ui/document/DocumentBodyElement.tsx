import React, { FC } from 'react';
import { css } from '@emotion/core';
import { Draggable } from 'react-beautiful-dnd';

interface IProps {
  id: string;
  index: number;
}

export const DocumentBodyElement: FC<IProps> = ({ id, index, children }) => {
  return (
    <Draggable draggableId={id} index={index}>
      {provided => (
        <div css={styles.root} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          {children}
        </div>
      )}
    </Draggable>
  );
};

const styles = {
  root: css`
    margin-bottom: 30px;
  `,
};
