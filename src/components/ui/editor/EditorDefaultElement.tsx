import React, { FC } from 'react';
import { IEditorLeafProps } from './EditorElement';

export const EditorDefaultElement: FC<IEditorLeafProps> = ({ attributes, children }) => {
  return <p {...attributes}>{children}</p>;
};
