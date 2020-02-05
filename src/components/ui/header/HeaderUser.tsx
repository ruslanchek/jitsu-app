import React, { FC } from 'react';
import { css } from '@emotion/core';
import { AvatarUser } from '../avatars/AvatarUser';
import { BORDER_RADIUS, HEADER_ELEMENT_HEIGHT } from '../../../common/ui';
import { COLORS } from '../../../common/colors';

interface IProps {}

export const HeaderUser: FC<IProps> = () => {
  return (
    <a href="/" css={styles.root}>
      <span css={styles.userName}>@m_brtn</span>
      <AvatarUser
        src={`https://i.pravatar.cc/${HEADER_ELEMENT_HEIGHT * window.devicePixelRatio}`}
        size={HEADER_ELEMENT_HEIGHT}
        title='Username'
      />
    </a>
  );
};

const styles = {
  root: css`
    display: flex;
    align-items: center;
    margin-left: 20px;
    border-radius: ${BORDER_RADIUS.MEDIUM};
    color: ${COLORS.SMOKE};
    transition: color .2s;
    
    
    &:hover {
      color: ${COLORS.PLATINUM};
    }
  `,

  userName: css`
    font-weight: 500;
    margin-right: 10px;
  `,
};
