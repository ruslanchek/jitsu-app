import React, { FC, useCallback, useMemo, useState } from 'react';
import { createEditor, Editor } from 'slate';
import { withHistory } from 'slate-history';
import { Editable, Slate, withReact } from 'slate-react';
import { EditorElement, EEditorElementType } from './EditorElement';

export const EditorView: FC = () => {
  const editor = useMemo(() => withCustomElements(withHistory(withReact(createEditor()))), []);
  const renderElement = useCallback(props => <EditorElement {...props} />, []);
  const [value, setValue] = useState<any>([
    {
      type: EEditorElementType.Paragraph,
      children: [
        {
          text: `The first thing I started to use daily were to-do lists, very detailed ones. I tried to note everything
I have to do, each smallest task. I always have a note and pen on my desk, and I use Asana for more 
significant projects to order everything that needs to be done and really feel the progress. 
Small wins and success are crucial in the human mind. That’s why every time I see how many tasks I fulfilled 
every day, I feel very satisfied and motivated. It also helps me to stay focused, because I see the real 
progress, every time I mark the task as done or scratch it off.`,
        },
      ],
    },
    {
      type: EEditorElementType.CheckList,
      checked: true,
      children: [{ text: 'Check up database connections' }],
    },
    {
      type: EEditorElementType.CheckList,
      checked: false,
      children: [{ text: 'Fill up the fixtures' }],
    },
    {
      type: EEditorElementType.CheckList,
      checked: false,
      children: [{ text: 'Swap Linaria CSS with Emotion' }],
    },
    {
      type: EEditorElementType.CheckList,
      checked: false,
      children: [{ text: 'Check connectivity during poor 3G connection' }],
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
  const { deleteBackward, insertBreak, insertNode, insertText } = editor;

  editor.insertText = (...args) => {
    insertText(...args);
  };

  editor.deleteBackward = (...args) => {
    deleteBackward(...args);
  };

  editor.insertNode = (...args) => {
    insertNode(...args);
  };

  editor.insertBreak = (...args) => {
    insertBreak(...args);
  };

  return editor;
};
