import React, { FC, ReactNodeArray } from 'react';
import { css } from '@emotion/core';
import { FONT_SIZE } from '../../../common/ui';

interface IProps {
  items: ReactNodeArray;
}

export const DocumentToolbar: FC<IProps> = ({ items }) => {
  return (
    <div css={styles.root}>
      {items.map((item, index) => (
        <div css={styles.item} key={index}>
          {item}
        </div>
      ))}
    </div>
  );
};

const styles = {
  root: css`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    line-height: ${FONT_SIZE.REGULAR};
  `,

  item: css`
    margin-right: 20px;
  `,
};
