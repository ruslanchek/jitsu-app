import React, { FC, useState } from 'react';
import { css } from '@emotion/core';
import { FiCheck } from 'react-icons/fi';
import { darken, rgba } from 'polished';
import { COLORS } from '../../../../../common/colors';
import { BORDER_RADIUS } from '../../../../../common/ui';
import classnames from 'classnames';

interface IProps {
  checked?: boolean;
  label: string;
}

export const DocumentWidgetSubTaskItem: FC<IProps> = ({ checked = false, label }) => {
  const [focus, setFocus] = useState(false);
  const [localChecked, setLocalChecked] = useState(checked);

  return (
    <div css={styles.root}>
      <label css={styles.checkBox} className={classnames({ checked, focus })}>
        <FiCheck className='check' color={COLORS.WHITE} />
        <input
          type='checkbox'
          checked={localChecked}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          className={classnames({ checked })}
          onChange={event => setLocalChecked(event.target.checked)}
        />
      </label>
      <span css={styles.label} className={classnames({ checked })}>
        {label}
      </span>
    </div>
  );
};

const styles = {
  root: css`
    display: flex;
    margin: 5px 0;
  `,

  checkBox: css`
    margin-right: 0.75em;
    width: 18px;
    height: 18px;
    border-radius: ${BORDER_RADIUS.SMALL};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: background-color 0.1s;
    background-color: ${COLORS.DIRTY_SNOW};
    box-shadow: inset 0 1px 2px ${rgba(COLORS.BLACK, 0.2)};
    position: relative;
    top: 2px;

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
      text-decoration: line-through;
    }

    &:focus {
      outline: none;
    }
  `,
};
