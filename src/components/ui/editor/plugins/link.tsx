import { ReactEditor } from 'slate-react';

export const withPasteLink = (editor: ReactEditor) => {
  const {
    insertNode,
    insertText,
    insertFragment,
    insertData,
    insertBreak,
    deleteBackward,
    deleteForward,
    deleteFragment,
    addMark,
    removeMark,
  } = editor;

  editor.insertNode = node => {
    console.log('insertNode', node);
    insertNode(node);
  };

  editor.insertText = text => {
    console.log('insertText', text);
    insertText(text);
  };

  editor.insertFragment = fragment => {
    console.log('insertFragment', fragment);
    insertFragment(fragment);
  };

  editor.insertData = data => {
    console.log('insertData', data);
    insertData(data);
  };

  editor.deleteBackward = unit => {
    console.log('deleteBackward', unit);
    deleteBackward(unit);
  };

  editor.deleteForward = unit => {
    console.log('deleteForward', unit);
    deleteForward(unit);
  };

  editor.deleteFragment = () => {
    console.log('deleteFragment');
    deleteFragment();
  };

  editor.insertBreak = () => {
    console.log('insertBreak');
    insertBreak();
  };

  editor.addMark = (key, value) => {
    console.log('addMark');
    addMark(key, value);
  };

  editor.removeMark = key => {
    console.log('removeMark', key);
    removeMark(key);
  };

  return editor;
};
