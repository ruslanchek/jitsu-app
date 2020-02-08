import React, { FC, ReactNode, useState } from 'react';
import { DragDropContext, DragStart, Droppable, DropResult } from 'react-beautiful-dnd';
import { DocumentBodyElement } from './DocumentBodyElement';
import { DocumentWidgetSubTasks } from '../widgets/sub-tasks/DocumentWidgetSubTasks';
import { DocumentWidgetTextEditor } from '../widgets/text-editor/DocumentWidgetTextEditor';
import { DocumentWidgetCodeEditor } from '../widgets/code/DocumentWidgetCodeEditor';

export interface IDocumentBodyElement {
  id: string;
  component: ReactNode;
}

const initial = [
  {
    id: '1',
    component: (
      <DocumentWidgetSubTasks
        items={[
          { id: '1', checked: true, label: 'Check connectivity' },
          { id: '2', checked: false, label: 'Finish API' },
          { id: '3', checked: false, label: 'Upload images to Amazon S3' },
        ]}
      />
    ),
  },
  {
    id: '2',
    component: <DocumentWidgetTextEditor />,
  },
  {
    id: '3',
    component: <DocumentWidgetCodeEditor />,
  },
];

const reorder = (list: IDocumentBodyElement[], startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

export const DocumentBody: FC = () => {
  const [elements, setElements] = useState<IDocumentBodyElement[]>(initial);
  const [draggingId, setDraggingId] = useState<string | undefined>(undefined);
  const [dragging, setDragging] = useState(false);

  function onDragStart(initial: DragStart) {
    setDragging(true);

    if (initial.draggableId) {
      setDraggingId(initial.draggableId);
    }
  }

  function onDragEnd(result: DropResult) {
    setDragging(false);
    setDraggingId(undefined);

    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    setElements(reorder(elements, result.source.index, result.destination.index));
  }

  return (
    <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
      <Droppable droppableId='list'>
        {provided => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {elements.map((element, index) => (
              <DocumentBodyElement
                key={element.id}
                id={element.id}
                index={index}
                isAnotherElementDragging={element.id !== draggingId && dragging}>
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
