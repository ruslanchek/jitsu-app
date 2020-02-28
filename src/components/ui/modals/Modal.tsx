import React, { FC } from 'react';
import { css } from '@emotion/core';
import { COLORS } from '../../../common/colors';
import { BORDER_RADIUS, BOX_SHADOW } from '../../../common/ui';
import { FiX } from 'react-icons/fi';

interface IProps {
  handleClose: () => void;
}

export const Modal: FC<IProps> = ({ children, handleClose }) => {
  return (
    <div css={styles.root}>
      {children}
      <div onClick={handleClose} css={styles.close}>
        <FiX />
      </div>
    </div>
  );
};

const styles = {
  root: css`
    background-color: ${COLORS.WHITE};
    border-radius: ${BORDER_RADIUS.MEDIUM};
    box-shadow: ${BOX_SHADOW.MEDIUM};
    padding: 40px 50px;
    position: relative;
  `,

  close: css`
    position: absolute;
    top: 10px;
    right: 10px;
    color: ${COLORS.SMOKE};
    cursor: pointer;
    font-size: 20px;
    
    &:hover {
      color: ${COLORS.HIGH_SMOKE};
    }
  `,
};
