import React, { FC } from 'react';
import { css } from '@emotion/core';
import { COLORS } from '../../../common/colors';
import { HeaderLogo } from './HeaderLogo';
import { HeaderAdd } from './HeaderAdd';
import { Limiter } from '../common/Limiter';
import { HeaderUser } from './HeaderUser';
import { HeaderNotifications } from './HeaderNotifications';

interface IProps {}

export const HeaderView: FC<IProps> = () => {
  return (
    <header css={styles.root}>
      <Limiter>
        <div css={styles.inner}>
          <div css={styles.left}>
            <HeaderLogo />

            <div css={styles.project}>

            </div>
          </div>

          <div css={styles.right}>
            <HeaderAdd />
            <HeaderNotifications />
            <HeaderUser />
          </div>
        </div>
      </Limiter>
    </header>
  );
};

const styles = {
  root: css`
    background-color: ${COLORS.SNOW};

    &:before {
      content: '';
      display: block;
      position: absolute;
      height: 10px;
      bottom: 0;
      left: 0;
      right: 0;
    }
  `,

  inner: css`
    height: 60px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  left: css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-grow: 1;
  `,

  right: css`
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  `,

  project: css`

`
};
