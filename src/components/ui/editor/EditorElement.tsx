import React, { FC } from 'react';
import { EditorCheckListElement } from './EditorChecklistElement';
import { EditorDefaultElement } from './EditorDefaultElement';

export interface IEditorLeafProps {
  attributes: any;
  leaf: any;
  element: any;
}

export enum EEditorElementType {
  Paragraph,
  CheckList,
}

export const EditorElement: FC<IEditorLeafProps> = props => {
  switch (props.element.type) {
    case EEditorElementType.CheckList: {
      return <EditorCheckListElement {...props} />;
    }

    default: {
      return <EditorDefaultElement {...props} />;
    }
  }
};
