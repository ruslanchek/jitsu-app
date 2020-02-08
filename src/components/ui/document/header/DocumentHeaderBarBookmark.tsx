import React, { FC, useState } from 'react';
import { css } from '@emotion/core';
import { COLORS } from '../../../../common/colors';
import { darken, lighten } from 'polished';
import { DocumentHeaderBarItem } from './DocumentHeaderBarItem';
import classNames from 'classnames';
import { FaRegStar, FaStar } from 'react-icons/fa';

interface IProps {
  mark?: boolean;
}

export const DocumentHeaderBarBookmark: FC<IProps> = ({ mark }) => {
  const [localMark, setLocalMark] = useState(mark);

  return (
    <DocumentHeaderBarItem>
      <button onClick={() => setLocalMark(!localMark)} css={styles.root} className={classNames({ mark: localMark })}>
        {localMark ? <FaStar className='icon' /> : <FaRegStar className='icon' />}
      </button>
    </DocumentHeaderBarItem>
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
    transition: color 0.2s, transform .2s;

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
    
    &:active {
      transform: scale(0.9);
    }
  `,
};
