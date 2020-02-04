import React, { FC, useState } from 'react';
import { css } from '@emotion/core';
import { Editor, Node, NodeEntry, Point, Range, Transforms } from 'slate';
import { useEditor, useReadOnly, ReactEditor } from 'slate-react';
import classnames from 'classnames';
import { EEditorElementType, IEditorLeafProps } from './EditorElement';
import { COLORS } from '../../../common/colors';
import { FiCheck } from 'react-icons/fi';
import { darken, rgba } from 'polished';

export const editorCheckListOnDeleteBackward = (editor: Editor, selection: Range, match: NodeEntry) => {};

export const editorCheckListOnInsertBreak = (editor: Editor, selection: Range, match: NodeEntry) => {
  const start = Editor.start(editor, match[1]);
  const end = Editor.end(editor, match[1]);

  if (Point.equals(selection.anchor, start) || Point.equals(selection.anchor, end)) {
    Transforms.setNodes(
      editor,
      { type: EEditorElementType.Default },
      {
        match: ({ type, children }) => {
          return type === EEditorElementType.CheckList && (!children || children.length === 0 || !children[0].text);
        },
      },
    );
  }
};

export const editorCheckListOnInsertNode = (editor: Editor, selection: Range, match: NodeEntry) => {
  const end = Editor.end(editor, match[1]);

  if (Point.equals(selection.anchor, end)) {
    Transforms.setNodes(
      editor,
      { type: EEditorElementType.CheckList, checked: false },
      {
        match: ({ type, children }) => {
          return type === EEditorElementType.CheckList;
        },
      },
    );
  }
};

// TODO:  Cannot resolve a Slate point from DOM point: [object HTMLSpanElement],1 by click outside checkbox
export const EditorCheckListElement: FC<IEditorLeafProps> = ({ attributes, children, element }) => {
  const [focus, setFocus] = useState(false);
  const editor = useEditor();
  const readOnly = useReadOnly();
  const { checked } = element;

  return (
    <div {...attributes} css={styles.root}>
      <label contentEditable={readOnly} css={styles.checkBox} className={classnames({ checked, focus })}>
        <FiCheck className='check' color={COLORS.WHITE} />
        <input
          type='checkbox'
          checked={checked}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
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
    align-items: center;
  `,

  checkBox: css`
    margin-right: 0.75em;
    width: 18px;
    height: 18px;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: background-color 0.1s;
    background-color: ${COLORS.DIRTY_SNOW};
    box-shadow: inset 0 1px 2px ${rgba(COLORS.BLACK, 0.2)};

    .check {
      transition: opacity 0.1s, transform 0.1s;
      opacity: 0;
      transform: scale(0);
    }

    > input {
      visibility: hidden;
      position: absolute;
      opacity: 0;
      z-index: -1;
    }

    &:hover {
      background-color: ${darken(0.05, COLORS.DIRTY_SNOW)};
    }

    &.checked {
      background-color: ${COLORS.GREEN};

      .check {
        opacity: 1;
        transform: scale(1);
      }

      &:hover {
        background-color: ${darken(0.05, COLORS.GREEN)};
      }
    }
  `,

  label: css`
    flex: 1;
    transition: color 0.1s;

    &.checked {
      color: ${COLORS.SMOKE};
    }

    &:focus {
      outline: none;
    }
  `,
};
