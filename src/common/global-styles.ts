import { css } from '@emotion/core';
import { COLORS } from './colors';
import { FONT_FAMILY, FONT_SIZE, BORDER_RADIUS, FONT_FAMILY_MONO } from './ui';
import { lighten } from 'polished';

export const globalStyles = css`
  body {
    background: ${COLORS.WHITE};
    margin: 0;
    line-height: 1.5;
    font-family: ${FONT_FAMILY};
    font-size: ${FONT_SIZE.REGULAR};
    color: ${COLORS.PLATINUM};
    overflow: hidden;
  }

  a {
    text-decoration: none;
  }

  button {
    padding: 0;
    outline: none;
  }

  p {
    margin: 1em 0 0 0;
  }

  h1 {
    font-size: ${FONT_SIZE.H1};
    font-weight: 500;
    margin: 1em 0 0 0;
  }

  h2 {
    font-size: ${FONT_SIZE.H2};
    font-weight: 500;
    margin: 1em 0 0 0;
  }

  h3 {
    font-size: ${FONT_SIZE.H3};
    font-weight: 500;
    margin: 1em 0 0 0;
  }

  h4 {
    font-size: ${FONT_SIZE.H4};
    font-weight: 500;
    margin: 1em 0 0 0;
  }

  h1,
  h2,
  h3,
  h4,
  p {
    &:first-of-type {
      margin-top: 0;
    }
  }

  hr {
    border: none;
    background: ${COLORS.DIRTY_SNOW};
    margin: 1em 0;
    height: 2px;
    display: block;
    border-radius: 2px;
  }

  a {
    transition: color 0.2s;

    &:link,
    &:visited {
      color: ${COLORS.BLUE};
    }

    &:hover,
    &:active {
      color: ${lighten(0.15, COLORS.BLUE)};
    }
  }

  pre {
    padding: 0;
    margin: 0;
  }

  code {
    background-color: ${COLORS.SNOW};
    display: block;
    padding: 0;
    border-radius: ${BORDER_RADIUS.MEDIUM};
    font-family: ${FONT_FAMILY_MONO};
  }
`;
