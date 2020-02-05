import React, { FC } from 'react';
import { css } from '@emotion/core';
import { COLORS } from '../../../common/colors';
import { rgba } from 'polished';
import { BORDER_RADIUS, FONT_FAMILY, FONT_SIZE } from '../../../common/ui';
import { EPhrase } from '../../../locales/EPhrase';
import { DocumentToolBarItem } from './DocumentToolBarItem';
import { FiPlay } from 'react-icons/all';

interface IProps {}

export const DocumentStatus: FC<IProps> = ({}) => {
  return (
    <DocumentToolBarItem label={EPhrase.Document_Status}>
      <span css={styles.root}>
        <FiPlay className="icon" /> In progress
      </span>
    </DocumentToolBarItem>
  );
};

const styles = {
  root: css`
    background-color: ${rgba(COLORS.PURPLE, 0.08)};
    padding: 2px 5px 2px 20px;
    border-radius: ${BORDER_RADIUS.SMALL};
    transition: background-color 0.2s;
    color: ${COLORS.PURPLE};
    border: none;
    font-family: ${FONT_FAMILY};
    font-size: ${FONT_SIZE.REGULAR};
    cursor: pointer;
    position: relative;
    
    .icon {
      position: absolute;
      display: block;
      left: 5px;
      top: 50%;
      width: 16px;
      height: 16px;
      transform: translateY(-50%);
    }

    &:hover {
      background-color: ${rgba(COLORS.PURPLE, 0.15)};
    }
  `,

};
