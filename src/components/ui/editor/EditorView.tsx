import React, { FC, useState } from 'react';
import { Editor, EditorState, ContentState, convertToRaw } from 'draft-js';

export const EditorView: FC = () => {
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(ContentState.createFromText('Hello!!!')),
  );

  return (
    <div>
      <Editor editorState={editorState} onChange={setEditorState} data-gram={true} />
      <button
        onClick={() => {
          const blocks = convertToRaw(editorState.getCurrentContent()).blocks;
          console.log(blocks);
        }}>
        Get
      </button>
    </div>
  );
};
