import { css } from '@emotion/core';
import { COLORS } from './colors';
import { FONT_FAMILY, FONT_SIZE, BORDER_RADIUS, FONT_FAMILY_MONO, INPUT_HEIGHT } from './ui';
import { darken, lighten } from 'polished';

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
  }

  h2 {
    font-size: ${FONT_SIZE.H2};
    font-weight: 500;
  }

  h3 {
    font-size: ${FONT_SIZE.H3};
    font-weight: 500;
  }

  h4 {
    font-size: ${FONT_SIZE.H4};
    font-weight: 500;
  }

  hr {
    border: none;
    background-color: ${COLORS.DIRTY_SNOW};
    height: 2px;
    margin: 1em 0 0;
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
    margin: 0;
    border-radius: ${BORDER_RADIUS.MEDIUM};
    font-family: ${FONT_FAMILY_MONO};
  }

  input.regular-input {
    border: 1px solid ${COLORS.DIRTY_SNOW};
    border-radius: ${BORDER_RADIUS.MEDIUM};
    background: ${COLORS.WHITE};
    height: ${INPUT_HEIGHT};
    outline: none;
    -webkit-appearance: none;
    padding: 0 12px;
    font-family: ${FONT_FAMILY};
    color: ${COLORS.PLATINUM};
    font-size: ${FONT_SIZE.REGULAR};
    transition: border-color 0.2s, box-shadow 0.2s;

    &:hover,
    &:focus {
      border-color: ${darken(0.05, COLORS.DIRTY_SNOW)};
    }

    &:focus {
      box-shadow: inset 0 1px 2px ${darken(0.05, COLORS.DIRTY_SNOW)};
    }
  }

  ::placeholder {
    color: ${COLORS.SMOKE};
  }

  ::selection {
    background: ${COLORS.BLUE};
    color: ${COLORS.WHITE};
  }

  ::-moz-selection {
    background: ${COLORS.BLUE};
    color: ${COLORS.WHITE};
  }
`;
