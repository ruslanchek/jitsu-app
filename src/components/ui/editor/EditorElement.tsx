import React, { FC } from 'react';
import { EditorCheckListElement } from './EditorChecklistElement';
import { EditorDefaultElement } from './EditorDefaultElement';
import { EditorParagraphElement } from './EditorParagraphElement';
import { EditorImageElement } from './EditorImageElement';

export interface IEditorLeafProps<T = any> {
  attributes: any;
  leaf: any;
  element: T;
}

export enum EEditorElementType {
  Default = 'Default',
  Paragraph = 'Paragraph',
  CheckList = 'Checklist',
  Image = 'Image',
}

export const EditorElement: FC<IEditorLeafProps> = props => {
  switch (props.element.type) {
    case EEditorElementType.CheckList: {
      return <EditorCheckListElement {...props} />;
    }

    case EEditorElementType.Image: {
      return <EditorImageElement {...props} />;
    }

    case EEditorElementType.Paragraph: {
      return <EditorParagraphElement {...props} />;
    }

    case EEditorElementType.Default:
    default: {
      return <EditorDefaultElement {...props} />;
    }
  }
};
