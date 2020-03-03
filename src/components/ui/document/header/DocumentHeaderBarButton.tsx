import React, { FC, ReactNode, useMemo, useState } from 'react';
import { css } from '@emotion/core';
import { darken, rgba } from 'polished';
import { BORDER_RADIUS, DOCUMENT_BUTTON_HEIGHT, FONT_FAMILY, FONT_SIZE } from '../../../../common/ui';
import { COLORS } from '../../../../common/colors';

interface IProps {
  color: string;
  background?: boolean;
  icon?: ReactNode;
  colorMode?: 'icon' | 'content' | 'all';
  onClick?: () => void;
}

export const DocumentHeaderBarButton: FC<IProps> = ({
  children,
  color,
  icon,
  background,
  colorMode = 'all',
  onClick = () => {},
}) => {
  const [hover, setHover] = useState();
  const contentColor = useMemo(() => (background ? (hover ? darken(0.1, color) : color) : color), [
    background,
    hover,
    color,
  ]);
  const style = useMemo(() => {
    return {
      backgroundColor: rgba(color, background ? (hover ? 0.16 : 0.08) : hover ? 0.08 : 0),
    };
  }, [color, background, hover]);

  const iconStyle = useMemo(() => {
    switch (colorMode) {
      case 'all':
      case 'icon': {
        return {
          color: contentColor,
        };
      }
      default: {
        return {};
      }
    }
  }, [contentColor, colorMode]);

  const contentStyle = useMemo(() => {
    switch (colorMode) {
      case 'all':
      case 'content': {
        return {
          color: contentColor,
        };
      }
      default: {
        return {};
      }
    }
  }, [colorMode, contentColor]);

  return (
    <button
      css={styles.root}
      style={style}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}>
      {icon && (
        <span css={styles.icon} style={iconStyle}>
          {icon}
        </span>
      )}
      <span css={styles.content} style={contentStyle}>
        {children}
      </span>
    </button>
  );
};

const styles = {
  root: css`
    padding: 0 5px;
    height: ${DOCUMENT_BUTTON_HEIGHT};
    line-height: ${DOCUMENT_BUTTON_HEIGHT};
    border-radius: ${BORDER_RADIUS.SMALL};
    transition: background-color 0.2s, color 0.2s, transform 0.2s;
    border: none;
    font-family: ${FONT_FAMILY};
    font-size: ${FONT_SIZE.REGULAR};
    cursor: pointer;
    position: relative;
    outline: none;
    display: flex;
    align-items: center;

    &:active {
      transform: scale(0.98);
    }
  `,

  icon: css`
    > svg {
      margin-right: 0.5ex;
      width: 14px;
      height: 14px;
      transform: translateY(1px);
    }
  `,

  content: css`
    color: ${COLORS.HIGH_SMOKE};
  `,
};
