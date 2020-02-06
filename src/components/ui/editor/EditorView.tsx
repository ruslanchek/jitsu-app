import React, { FC, useCallback, useMemo, useState } from 'react';
import { createEditor, Node } from 'slate';
import { withHistory } from 'slate-history';
import { Editable, Slate, withReact } from 'slate-react';
import { css } from '@emotion/core';
import { withPasteLink } from './plugins/link';

export const EditorView: FC = () => {
  const editor = useMemo(() => withPasteLink(withHistory(withReact(createEditor()))), []);
  const [value, setValue] = useState<Node[]>([
    {
      type: 'paragraph',
      children: [{ text: '' }],
    },
  ]);

  return (
    <div css={styles.root} data-dragndrop={true}>
      <Slate editor={editor} value={value} onChange={value => setValue(value)}>
        <Editable data-gramm={true} />
      </Slate>
    </div>
  );
};

const styles = {
  root: css`
    padding-bottom: 20px;
    margin-bottom: 20px;
  `,
};
