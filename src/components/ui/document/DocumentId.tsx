import React, { FC } from 'react';
import { css } from '@emotion/core';
import { COLORS } from '../../../common/colors';
import { FiLink } from 'react-icons/fi';
import { DocumentToolBarItem } from './DocumentToolBarItem';

interface IProps {
  id: string;
}

export const DocumentId: FC<IProps> = ({ id }) => {
  return (
    <DocumentToolBarItem>
      <a href='/' css={styles.root}>
        <FiLink className='anchor' size='16px' />#{id}
      </a>
    </DocumentToolBarItem>
  );
};

const styles = {
  root: css`
    color: ${COLORS.SMOKE};
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: color 0.2s;
    position: relative;

    .anchor {
      width: 16px;
      height: 16px;
      margin-right: 6px;
      position: absolute;
      display: block;
      opacity: 0;
      transform: translate(-20px, -1px);
      transition: opacity 0.2s;
    }

    &:hover {
      color: ${COLORS.PLATINUM};

      .anchor {
        opacity: 1;
      }
    }
  `,
};
