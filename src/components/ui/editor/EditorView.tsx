import React, { FC, useMemo, useState, useCallback } from 'react';
import { createEditor, Editor, Range, Transforms, Point } from 'slate';
import { withHistory } from 'slate-history';
import { Slate, Editable, withReact } from 'slate-react';
import { EditorElement, EEditorElementType } from './EditorElement';

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
      checked: true,
      children: [{ text: 'Slide to the left.' }],
    },
  ]);

  return (
    <Slate editor={editor} value={value} onChange={value => setValue(value)}>
      <Editable data-gramm={true} renderElement={renderElement} />
    </Slate>
  );
};

const withCustomElements = (editor: Editor): any => {
  const { deleteBackward } = editor;

  editor.deleteBackward = (...args) => {
    const { selection } = editor;

    if (selection && Range.isCollapsed(selection)) {
      const [match] = Editor.nodes(editor, {
        match: n => n.type === EEditorElementType.CheckList,
      });

      if (match) {
        const start = Editor.start(editor, match[1]);

        if (Point.equals(selection.anchor, start)) {
          Transforms.setNodes(
            editor,
            { type: EEditorElementType.Paragraph },
            { match: n => n.type === EEditorElementType.CheckList },
          );
          return;
        }
      }
    }

    deleteBackward(...args);
  };

  return editor;
};
