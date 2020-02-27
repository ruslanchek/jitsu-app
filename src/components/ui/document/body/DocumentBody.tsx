import React, { FC, useCallback, useState } from 'react';
import { DragDropContext, DragStart, Droppable, DropResult } from 'react-beautiful-dnd';
import { DocumentBodyElement } from './DocumentBodyElement';
import { DocumentWidgetSubTasks } from '../widgets/sub-tasks/DocumentWidgetSubTasks';
import { DocumentWidgetTextEditor } from '../widgets/text-editor/DocumentWidgetTextEditor';
import { DocumentWidgetCodeEditor } from '../widgets/code/DocumentWidgetCodeEditor';
import { DOCUMENT_BODY_WIDGETS, EDocumentBodyWidget } from './document-body-widgets';
import { css } from '@emotion/core';
import { DocumentBodyWidgetsBarItem } from './DocumentBodyWidgetsBarItem';
import { DOCUMENT_SIDE_TOOLS } from '../../../../common/ui';

const BODY_DROPPABLE_ID = 'bodyDroppableId';
const WIDGETS_DROPPABLE_ID = 'widgetsDroppableId';

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

const reorderItems = (list: IDocumentBodyElement[], startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const newItem = (list: IDocumentBodyElement[], sourceIndex: number, destinationIndex: number) => {
  const widget = DOCUMENT_BODY_WIDGETS[sourceIndex];
  const newItem: IDocumentBodyElement = {
    id: '',
    type: widget.type,
    data: widget.defaultData,
  };

  const result = Array.from(list).map((item, index) => {
    return {
      ...item,
      id: index.toString(),
    };
  });

  result.splice(destinationIndex, 0, newItem);

  return result;
};

const deleteItem = (list: IDocumentBodyElement[], index: number) => {
  const result = Array.from(list);
  result.splice(index, 1);
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

  const onDeleteElement = useCallback(
    (index: number) => {
      setElements(deleteItem(elements, index));
    },
    [elements],
  );

  const onDragEnd = useCallback(
    (result: DropResult) => {
      const { source, destination } = result;

      setDragging(false);
      setDraggingId(undefined);

      if (!destination) {
        return;
      }

      if (destination.index === source.index && source.droppableId === destination.droppableId) {
        return;
      }

      if (source.droppableId === destination.droppableId) {
        setElements(reorderItems(elements, source.index, destination.index));
      }

      if (source.droppableId === WIDGETS_DROPPABLE_ID) {
        setElements(newItem(elements, source.index, destination.index));
      }
    },
    [elements],
  );

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
      <div css={styles.document}>
        <div css={styles.documentBody}>
          <Droppable droppableId={BODY_DROPPABLE_ID}>
            {provided => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {elements.map((element, index) => (
                  <DocumentBodyElement
                    key={element.id}
                    id={element.id}
                    index={index}
                    onDelete={onDeleteElement}
                    isAnotherElementDragging={element.id !== draggingId && dragging}>
                    {renderWidget(element.type, element.data)}
                  </DocumentBodyElement>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
        <div css={styles.widgetsBarContainer}>
          <div css={styles.widgetsBar}>
            <Droppable droppableId={WIDGETS_DROPPABLE_ID} isDropDisabled>
              {provided => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  {DOCUMENT_BODY_WIDGETS.map((widget, index) => (
                    <DocumentBodyWidgetsBarItem key={widget.id} index={index} widget={widget} />
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        </div>
      </div>
    </DragDropContext>
  );
};

const styles = {
  document: css`
    display: flex;
  `,

  documentBody: css`
    flex-grow: 1;
  `,

  widgetsBarContainer: css`
    width: ${DOCUMENT_SIDE_TOOLS.WIDGET_SIZE};
    min-width: ${DOCUMENT_SIDE_TOOLS.WIDGET_SIZE};
    margin-left: 20px;
    position: relative;
  `,

  widgetsBar: css`
    width: ${DOCUMENT_SIDE_TOOLS.WIDGET_SIZE};
    box-sizing: border-box;
    position: sticky;
    top: ${DOCUMENT_SIDE_TOOLS.STICKY_TOP_POSITION};
  `,
};
