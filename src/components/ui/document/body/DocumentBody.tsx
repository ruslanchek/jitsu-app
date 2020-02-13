import React, { FC, ReactNode, useState } from 'react';
import { DragDropContext, DragStart, Droppable, DropResult } from 'react-beautiful-dnd';
import { DocumentBodyElement } from './DocumentBodyElement';
import { DocumentWidgetSubTasks } from '../widgets/sub-tasks/DocumentWidgetSubTasks';
import { DocumentWidgetTextEditor } from '../widgets/text-editor/DocumentWidgetTextEditor';
import { DocumentWidgetCodeEditor } from '../widgets/code/DocumentWidgetCodeEditor';
import { EDocumentBodyWidget } from './document-body-widgets';

export interface IDocumentBodyElement {
  id: string;
  type: EDocumentBodyWidget;
  data: any;
}

const initial: IDocumentBodyElement[] = [
  {
    id: '1',
    type: EDocumentBodyWidget.Subtasks,
    data: {
      items: [
        { id: '1', checked: true, label: 'Check connectivity' },
        { id: '2', checked: false, label: 'Finish API' },
        { id: '3', checked: false, label: 'Upload images to Amazon S3' },
      ],
    },
  },
  {
    id: '2',
    type: EDocumentBodyWidget.Text,
    data: {},
  },
  {
    id: '3',
    type: EDocumentBodyWidget.Code,
    data: {},
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

  function renderWidget(type: EDocumentBodyWidget, data: any) {
    switch (type) {
      case EDocumentBodyWidget.Code: {
        return <DocumentWidgetCodeEditor {...data} />;
      }
      case EDocumentBodyWidget.Subtasks: {
        return <DocumentWidgetSubTasks {...data} />;
      }
      case EDocumentBodyWidget.Text: {
        return <DocumentWidgetTextEditor {...data} />;
      }
      default: {
        return null;
      }
    }
  }

  return (
    <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
      <Droppable droppableId='documentBody'>
        {provided => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {elements.map((element, index) => (
              <DocumentBodyElement
                key={element.id}
                id={element.id}
                index={index}
                isAnotherElementDragging={element.id !== draggingId && dragging}>
                {renderWidget(element.type, element.data)}
              </DocumentBodyElement>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
