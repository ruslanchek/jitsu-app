import React, { FC, useState } from 'react';
import { css } from '@emotion/core';
import { BORDER_RADIUS, FONT_SIZE } from '../../../../common/ui';
import { COLORS } from '../../../../common/colors';
import classNames from 'classnames';
import ContentEditable from 'react-contenteditable';

interface IProps {
  value: string;
  editable?: boolean;
}

export const DocumentHeaderTitle: FC<IProps> = ({ value, editable }) => {
  const [localValue, setLocalValue] = useState(value);
  const [focus, setFocus] = useState(false);

  return (
    <div css={styles.root}>
      <h1 css={styles.h1} className={classNames({ editable, focus })}>
        {editable ? (
          <ContentEditable
            css={styles.editable}
            html={localValue}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            onChange={event => setLocalValue(event.target.value)}
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
    margin: 0 -15px 12px -15px;
    border-radius: ${BORDER_RADIUS.MEDIUM};
    border: 1px solid transparent;
    transition: border-color 0.2s;

    &.editable {
      &:hover {
        border-color: ${COLORS.DIRTY_SNOW};
      }

      &.focus {
        border-color: ${COLORS.CARBON};
      }
    }
  `,

  editable: css`
    outline: none;
  `,
};
