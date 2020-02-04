import React, { FC, useCallback, useMemo, useState } from 'react';
import { createEditor, Editor } from 'slate';
import { withHistory } from 'slate-history';
import { Editable, Slate, withReact } from 'slate-react';
import { EditorElement, editorElementTypes, EEditorElementType } from './EditorElement';
import {
  editorCheckListOnDeleteBackward,
  editorCheckListOnInsertBreak,
  editorCheckListOnInsertNode,
} from './EditorChecklistElement';

export const EditorView: FC = () => {
  const editor = useMemo(() => withCustomElements(withHistory(withReact(createEditor()))), []);
  const renderElement = useCallback(props => <EditorElement {...props} />, []);
  const [value, setValue] = useState<any>([
    {
      type: EEditorElementType.Paragraph,
      children: [{ text: 'A line of text in a paragraph.' }],
    },
    {
      type: EEditorElementType.CheckList,
      checked: true,
      children: [{ text: 'Slide to the left.' }],
    },
    {
      type: EEditorElementType.CheckList,
      checked: false,
      children: [{ text: 'Slide to the left.' }],
    },
  ]);

  return (
    <div data-dragndrop={true}>
      <Slate editor={editor} value={value} onChange={value => setValue(value)}>
        <Editable data-gramm={true} renderElement={renderElement} />
      </Slate>
    </div>
  );
};

const withCustomElements = (editor: Editor): any => {
  const { deleteBackward, insertBreak } = editor;

  editor.deleteBackward = (...args) => {
    const { selection } = editor;

    if (selection) {
      const [match] = Editor.nodes(editor, {
        match: n => editorElementTypes.includes(n.type),
      });

      if (match && match[0]) {
        switch (match[0].type) {
          case EEditorElementType.CheckList: {
            editorCheckListOnDeleteBackward(editor, selection, match);
          }

          case EEditorElementType.Paragraph: {
            // return editorCheckListOnDeleteBackward(editor, selection, match)
          }
        }
      }
    }

    deleteBackward(...args);
  };

  editor.insertNode = (...args) => {
    const { selection } = editor;

    if (selection) {
      const [match] = Editor.nodes(editor, {
        match: n => editorElementTypes.includes(n.type),
      });

      if (match && match[0]) {
        switch (match[0].type) {
          case EEditorElementType.CheckList: {
            editorCheckListOnInsertNode(editor, selection, match);
          }

          case EEditorElementType.Paragraph: {
            // return editorCheckListOnDeleteBackward(editor, selection, match)
          }
        }
      }
    }
  };

  editor.insertBreak = (...args) => {
    const { selection } = editor;

    if (selection) {
      const [match] = Editor.nodes(editor, {
        match: n => editorElementTypes.includes(n.type),
      });

      if (match && match[0]) {
        switch (match[0].type) {
          case EEditorElementType.CheckList: {
            editorCheckListOnInsertBreak(editor, selection, match);
          }

          case EEditorElementType.Paragraph: {
            // return editorCheckListOnDeleteBackward(editor, selection, match)
          }
        }
      }
    }

    insertBreak(...args);
  };

  return editor;
};
