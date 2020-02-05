import React, { FC } from 'react';
import { css } from '@emotion/core';
import { AvatarUser } from '../avatars/AvatarUser';
import { HEADER_ELEMENT_HEIGHT } from '../../../common/ui';

interface IProps {}

export const HeaderUser: FC<IProps> = () => {
  return (
    <div css={styles.root}>
      <span css={styles.userName}>@m_brtn</span>
      <AvatarUser
        src={`https://i.pravatar.cc/${HEADER_ELEMENT_HEIGHT * window.devicePixelRatio}`}
        size={HEADER_ELEMENT_HEIGHT}
        title='Username'
      />
    </div>
  );
};

const styles = {
  root: css`
    display: flex;
    align-items: center;
    margin-left: 20px;
  `,

  userName: css`
    font-weight: 500;
    margin-right: 10px;
  `,
};
