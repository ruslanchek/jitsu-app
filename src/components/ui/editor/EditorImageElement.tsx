import React, { FC } from 'react';
import { css } from '@emotion/core';
import { IEditorLeafProps } from './EditorElement';
import { useReadOnly } from 'slate-react';
import { BORDER_RADIUS } from '../../../common/ui';
import { COLORS } from '../../../common/colors';

export const EditorImageElement: FC<IEditorLeafProps> = ({ attributes, children, element }) => {
  const { src } = element;
  // const editor = useEditor();
  const readOnly = useReadOnly();

  return (
    <div {...attributes} css={styles.root} contentEditable={!readOnly} suppressContentEditableWarning>
      <div css={styles.inner}>

        <span css={styles.label} contentEditable={!readOnly} suppressContentEditableWarning>
          <img css={styles.image} src={src} alt={''} contentEditable={!readOnly} />
          {children}
        </span>
      </div>
    </div>
  );
};

const styles = {
  root: css`
    display: flex;
    margin-bottom: 0.3em;
  `,

  inner: css`
    padding: 6px;
    border-radius: ${BORDER_RADIUS.MEDIUM};
    background-color: ${COLORS.DIRTY_SNOW};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `,

  image: css`
    display: block;
    flex-grow: 0;
    flex-shrink: 1;
    border-radius: ${BORDER_RADIUS.SMALL};
  `,

  label: css`
    &:focus {
      outline: none;
    }
  `,
};
