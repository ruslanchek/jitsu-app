import { ReactEditor } from 'slate-react';

export const withPasteLink = (editor: ReactEditor) => {
  const { insertNode, insertText, insertFragment, insertData, deleteBackward, deleteForward } = editor;

  editor.insertNode = (...args) => {
    console.log('insertNode');
    insertNode(...args);
  };

  editor.insertText = (...args) => {
    console.log('insertText');
    insertText(...args);
  };

  editor.insertFragment = (...args) => {
    console.log('insertFragment');
    insertFragment(...args);
  };

  editor.insertData = (...args) => {
    console.log('insertData');
    insertData(...args);
  };

  editor.deleteBackward = (...args) => {
    console.log('deleteBackward');
    deleteBackward(...args);
  };

  editor.deleteForward = (...args) => {
    console.log('deleteForward');
    deleteForward(...args);
  };

  return editor;
};
