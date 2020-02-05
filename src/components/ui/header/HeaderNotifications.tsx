import React, { FC } from 'react';
import { css } from '@emotion/core';
import { FiActivity } from 'react-icons/all';
import { HEADER_ELEMENT_HEIGHT } from '../../../common/ui';
import { COLORS } from '../../../common/colors';
import { rgba } from 'polished';

export const HeaderNotifications: FC = () => {
  return (
    <a href='/' css={styles.root}>
      <FiActivity className='icon' />
      <i css={styles.dot}/>
    </a>
  );
};

const styles = {
  root: css`
    border: 1px solid ${COLORS.CARBON};
    height: ${HEADER_ELEMENT_HEIGHT}px;
    width: ${HEADER_ELEMENT_HEIGHT}px;
    border-radius: 6px;
    margin-left: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    color: ${COLORS.SMOKE};
    transition: background-color 0.2s;
    position: relative;

    .icon {
      width: 20px;
      height: 20px;
    }

    &:hover {
      background-color: ${rgba(COLORS.CARBON, 0.5)};
    }
  `,

  dot: css`
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background-color: ${COLORS.FIRE_ROSE};
    position: absolute;
    top: -4px;
    right: -4px;
  `
};
