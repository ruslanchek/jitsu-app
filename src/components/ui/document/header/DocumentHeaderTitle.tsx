import React, { FC, useEffect, useRef, useState } from 'react';
import { css } from '@emotion/core';
import { BORDER_RADIUS, FONT_SIZE } from '../../../../common/ui';
import { COLORS } from '../../../../common/colors';
import classNames from 'classnames';
import ContentEditable from 'react-contenteditable';
import { useReadOnly } from 'slate-react';

interface IProps {
  value: string;
  onChange?: (value: string) => void;
  editable?: boolean;
  placeholder?: string;
}

export const DocumentHeaderTitle: FC<IProps> = ({ value, editable, onChange, placeholder }) => {
  const [localValue, setLocalValue] = useState(value);
  const [focus, setFocus] = useState(false);
  const editableRef = useRef(null);

  function handleChange(value: string) {
    setLocalValue(value);
    if (onChange) {
      onChange(value);
    }
  }

  return (
    <div css={styles.root}>
      <h1 css={styles.h1} className={classNames({ editable, focus })}>
        {editable ? (
          <ContentEditable
            ref={editableRef}
            css={styles.editable}
            html={localValue}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            placeholder={placeholder || ''}
            onChange={event => handleChange(event.target.value)}
          />
        ) : (
          value
        )}
      </h1>
    </div>
  );
};

const styles = {
  root: css``,

  h1: css`
    font-size: ${FONT_SIZE.H1};
    outline: none;
    padding: 5px 15px 3px;
    margin: -6px -16px 12px -16px;
    border-radius: ${BORDER_RADIUS.MEDIUM};
    border: 1px solid transparent;
    transition: border-color 0.2s;

    &.editable {
      cursor: text;

      &:hover {
        border-color: ${COLORS.DIRTY_SNOW};
      }

      &.focus {
        border-color: ${COLORS.CARBON};
      }
    }

    > div[contenteditable='true']:empty:before {
      content: attr(placeholder);
      display: block;
      color: ${COLORS.SMOKE};
    }
  `,

  editable: css`
    outline: none;
  `,
};
