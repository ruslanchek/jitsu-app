import React, { FC, ReactNodeArray } from 'react';
import { css } from '@emotion/core';
import { FONT_SIZE } from '../../../common/ui';

interface IProps {
  items: ReactNodeArray;
  align: 'left' | 'right';
}

export const DocumentToolbar: FC<IProps> = ({ items, align }) => {
  return (
    <div css={styles.root}>
      {items.map((item, index) => (
        <div css={styles.item} className={align} key={index}>
          {item}
        </div>
      ))}
    </div>
  );
};

const styles = {
  root: css`
    display: flex;
    flex-wrap: wrap;
    line-height: ${FONT_SIZE.REGULAR};
    margin-bottom: 1px;
  `,

  item: css`
    &.left {
      margin: 0 22px 10px 0;
    }

    &.right {
      margin: 0 0 10px 22px;
    }
  `,
};
