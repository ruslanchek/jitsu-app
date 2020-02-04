import React, { FC } from 'react';
import { EditorCheckListElement } from './EditorChecklistElement';
import { EditorDefaultElement } from './EditorDefaultElement';
import { EditorParagraphElement } from './EditorParagraphElement';

export interface IEditorLeafProps {
  attributes: any;
  leaf: any;
  element: any;
}

export enum EEditorElementType {
  Default,
  Paragraph,
  CheckList,
}

export const EditorElement: FC<IEditorLeafProps> = props => {
  switch (props.element.type) {
    case EEditorElementType.CheckList: {
      return <EditorCheckListElement {...props} />;
    }

    case EEditorElementType.Paragraph: {
      return <EditorParagraphElement {...props} />;
    }

    default: {
      return <EditorDefaultElement {...props} />;
    }
  }
};
