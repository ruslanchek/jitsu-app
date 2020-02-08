import React, { FC, ReactNode } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { DocumentBodyElement } from './DocumentBodyElement';

export interface IDocumentBodyElement {
  id: string;
  component: ReactNode;
}

interface IProps {
  elements: IDocumentBodyElement[];
  onReorder: (elements: IDocumentBodyElement[]) => void;
}

const reorder = (list: IDocumentBodyElement[], startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

export const DocumentBody: FC<IProps> = ({ elements, onReorder }) => {
  function onDragEnd(result: DropResult) {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    onReorder(reorder(elements, result.source.index, result.destination.index));
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId='list'>
        {provided => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {elements.map((element, index) => (
              <DocumentBodyElement key={element.id} id={element.id} index={index}>
                {element.component}
              </DocumentBodyElement>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
