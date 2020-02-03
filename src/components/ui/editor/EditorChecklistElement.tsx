import React, { FC } from 'react';
import { css } from '@emotion/core';
import { Transforms } from 'slate';
import { useEditor, useReadOnly, ReactEditor } from 'slate-react';
import classnames from 'classnames';
import { IEditorLeafProps } from './EditorElement';
import { COLORS } from '../../../common/colors';
import { FiCheck } from 'react-icons/all';

// TODO:  Cannot resolve a Slate point from DOM point: [object HTMLSpanElement],1 by click outside checkbox
export const EditorCheckListElement: FC<IEditorLeafProps> = ({ attributes, children, element }) => {
  const editor = useEditor();
  const readOnly = useReadOnly();
  const { checked } = element;
  return (
    <div {...attributes} css={styles.root}>
      <label contentEditable={false} css={styles.checkBox} className={classnames({ checked })}>
        <FiCheck />
        <input
          type='checkbox'
          checked={checked}
          className={classnames({ checked })}
          onChange={event => {
            const path = ReactEditor.findPath(editor, element);
            Transforms.setNodes(editor, { checked: event.target.checked }, { at: path });
          }}
        />
      </label>
      <span
        css={styles.label}
        className={classnames({ checked })}
        contentEditable={!readOnly}
        suppressContentEditableWarning>
        {children}
      </span>
    </div>
  );
};

const styles = {
  root: css`
    display: flex;
    flex-direction: row;
    align-items: center;
  `,

  checkBox: css`
    margin-right: 0.5em;
    width: 18px;
    height: 18px;
    background-color: ${COLORS.GREEN};
    border-radius: 3px;

    > input {
      visibility: hidden;
      position: absolute;
      opacity: 0;
      z-index: -1;
    }
  `,

  label: css`
    flex: 1;
    transition: color 0.2s;

    &.checked {
      color: ${COLORS.SMOKE};
    }

    &:focus {
      outline: none;
    }
  `,
};
