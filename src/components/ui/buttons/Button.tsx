import { css } from '@emotion/core';
import React, { useState } from 'react';
import { ActivityIndicator } from '../loading/ActivityIndicator';
import { BORDER_RADIUS, FONT_FAMILY, FONT_SIZE, INPUT_HEIGHT } from '../../../common/ui';
import { COLORS } from '../../../common/colors';
import { darken, rgba } from 'polished';

interface IProps {
  type?: 'submit' | 'button';
  size?: 'small' | 'large';
  color?: 'default';
  disabled?: boolean;
  loading?: boolean;
  tabIndex?: number;
  onClick?: () => void;
}

export const Button: React.FC<IProps> = props => {
  const {
    type = 'button',
    size = 'large',
    color = 'default',
    disabled = false,
    loading = false,
    onClick = () => {},
    tabIndex = 0,
    children,
  } = props;

  const [isFocusMarked, setFocusMarked] = useState(false);

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      type={type}
      disabled={disabled || loading}
      tabIndex={tabIndex}
      className={isFocusMarked ? 'focus' : ''}
      onKeyUp={() => {
        setFocusMarked(true);
      }}
      onBlur={() => {
        setFocusMarked(false);
      }}
      onMouseDown={() => {
        setFocusMarked(false);
      }}
      css={[styles.root, styles.sizes[size || 'large'], styles.colors[color || 'default']]}
      onClick={handleClick}>
      {loading ? <ActivityIndicator size='small' color='#fff' /> : children}
    </button>
  );
};

const styles = {
  root: css`
    font-family: ${FONT_FAMILY};
    border: none;
    background: none;
    outline: none;
    display: inline-flex;
    justify-content: center;
    user-select: none;
    align-items: center;
    box-sizing: border-box;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-appearance: none;
    font-size: ${FONT_SIZE.REGULAR};
    font-weight: 400;
    transition: background-color 0.2s, box-shadow 0.2s, transform 0.2s;
    transform: scale(0.99999);
    border-radius: ${BORDER_RADIUS.MEDIUM};

    &:active {
      transform: scale(0.99);
    }

    &:disabled {
      pointer-events: none;
      opacity: 0.3;
    }
  `,

  icon: css`
    position: relative;
    top: 1.5px;
    margin: 0 8px 0 -8px;
  `,

  colors: {
    default: css`
      background-color: ${COLORS.PURPLE};
      color: ${COLORS.WHITE};

      &:hover {
        background-color: ${darken(0.1, COLORS.PURPLE)};
      }

      &:active {
        background-color: ${darken(0.1, COLORS.PURPLE)};
        box-shadow: 0 0 0 0 ${rgba(COLORS.PURPLE, 0)};
      }

      &.focus {
        background-color: ${COLORS.PURPLE};
        box-shadow: 0 0 0 3.5px ${rgba(COLORS.PURPLE, 0.33)};

        &:active {
          background-color: ${darken(0.1, COLORS.PURPLE)};
          box-shadow: 0 0 0 3.5px ${rgba(COLORS.PURPLE, 0.33)}, 0 0 0 0 ${rgba(COLORS.PURPLE, 0)};
        }
      }
    `,
  },

  sizes: {
    large: css`
      height: ${INPUT_HEIGHT.LARGE};
      font-size: ${FONT_SIZE.REGULAR};
      min-width: 180px;
      padding: 0 20px;
    `,

    small: css`
      height: ${INPUT_HEIGHT.SMALL};
      font-size: ${FONT_SIZE.SMALL};
      padding: 0 20px;
    `,
  },
};
