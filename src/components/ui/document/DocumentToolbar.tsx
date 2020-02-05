import React, { FC, ReactNodeArray, Fragment } from 'react';
import { css } from '@emotion/core';
import { FONT_SIZE } from '../../../common/ui';

interface IProps {
  items: ReactNodeArray;
}

export const DocumentToolbar: FC<IProps> = ({ items }) => {
  return (
    <div css={styles.root}>
      {items.map((item, index) => (
        <Fragment key={index}>{item}</Fragment>
      ))}
    </div>
  );
};

const styles = {
  root: css`
    display: flex;
    align-items: center;
    line-height: ${FONT_SIZE.REGULAR};
    margin-bottom: 20px;
  `,
};
