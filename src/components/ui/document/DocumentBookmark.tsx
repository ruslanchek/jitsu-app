import React, { FC, useState } from 'react';
import { css } from '@emotion/core';
import { COLORS } from '../../../common/colors';
import { darken, lighten, rgba } from 'polished';
import { BORDER_RADIUS, DOCUMENT_BUTTON_HEIGHT, FONT_FAMILY, FONT_SIZE } from '../../../common/ui';
import { DocumentToolBarItem } from './DocumentToolBarItem';
import classNames from 'classnames';
import { FaRegStar, FaStar } from 'react-icons/fa';

interface IProps {
  mark?: boolean;
}

export const DocumentBookmark: FC<IProps> = ({ mark }) => {
  const [localMark, setLocalMark] = useState(mark);

  return (
    <DocumentToolBarItem>
      <button onClick={() => setLocalMark(!localMark)} css={styles.root} className={classNames({ mark: localMark })}>
        {localMark ? <FaStar className='icon' /> : <FaRegStar className='icon' />}{' '}
      </button>
    </DocumentToolBarItem>
  );
};

const styles = {
  root: css`
    background: none;
    border: none;
    display: block;
    outline: none;
    width: 18px;
    height: 24px;
    color: ${COLORS.SMOKE};
    padding: 0;
    cursor: pointer;
    transition: color 0.2s;

    .icon {
      width: 18px;
      height: 18px;
      transform: translateY(-0.5px);
    }

    &:hover {
      color: ${darken(0.1, COLORS.SMOKE)};
    }

    &.mark {
      color: ${COLORS.YELLOW};

      &:hover {
        color: ${lighten(0.1, COLORS.YELLOW)};
      }
    }
  `,
};
