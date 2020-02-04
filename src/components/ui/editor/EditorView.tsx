import React, { FC, useMemo, useState, useCallback } from 'react';
import { createEditor, Editor, Range, Transforms, Point, Node } from 'slate';
import { withHistory } from 'slate-history';
import { Slate, Editable, withReact } from 'slate-react';
import { EditorElement, EEditorElementType } from './EditorElement';

export const EditorView: FC = () => {
  const editor = useMemo(() => withCustomElements(withHistory(withReact(createEditor()))), []);
  const renderElement = useCallback(props => <EditorElement {...props} />, []);
  const [value, setValue] = useState<any>([
    {
      type: EEditorElementType.Default,
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
    <Slate editor={editor} value={value} onChange={value => setValue(value)}>
      <Editable data-gramm={true} renderElement={renderElement} />
    </Slate>
  );
};

const withCustomElements = (editor: Editor): any => {
  const { deleteBackward, insertBreak } = editor;
  const customElements = [EEditorElementType.CheckList, EEditorElementType.Paragraph];

  editor.deleteBackward = (...args) => {
    const { selection } = editor;

    if (selection && Range.isCollapsed(selection)) {
      const [match] = Editor.nodes<Node>(editor, {
        match: n => customElements.includes(n.type),
      });

      if (match) {
        const start = Editor.start(editor, match[1]);

        if (Point.equals(selection.anchor, start)) {
          return Transforms.setNodes(
            editor,
            { type: EEditorElementType.Default },
            { match: n => customElements.includes(n.type) },
          );
        }
      }
    }

    deleteBackward(...args);
  };

  editor.insertBreak = (...args) => {
    const [match] = Editor.nodes(editor, {
      match: n => customElements.includes(n.type),
    });

    if (match && match[0] && customElements.includes(match[0].type)) {
      switch (match[0].type) {
        case EEditorElementType.CheckList : {
          if(match[0].children.length === 0 || !match[0].children[0].text) {
            return Transforms.setNodes(
              editor,
              { type: EEditorElementType.Paragraph },
            );
          }
          break;
        }

        default: {
          break;
        }
      }
    }
    
    insertBreak(...args);
  };

  return editor;
};
