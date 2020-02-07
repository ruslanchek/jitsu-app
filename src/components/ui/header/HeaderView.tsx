import React, { FC } from 'react';
import { css } from '@emotion/core';
import { COLORS } from '../../../common/colors';
import { HeaderLogo } from './HeaderLogo';
import { HeaderAdd } from './HeaderAdd';
import { Limiter } from '../common/Limiter';
import { HeaderUser } from './HeaderUser';
import { HeaderNotifications } from './HeaderNotifications';
import { HeaderMenu } from './HeaderMenu';
import { MIN_WIDTH } from '../../../common/ui';
import { HeaderProject } from './HeaderProject';
import { rgba } from 'polished';
import { HeaderSearch } from './HedaerSearch';

interface IProps {}

export const HeaderView: FC<IProps> = () => {
  return (
    <header css={styles.root}>
      <Limiter>
        <div css={styles.inner}>
          <div css={styles.left}>
            <HeaderLogo />
            <HeaderProject />
          </div>
          <div css={styles.right}>
            <HeaderSearch />
            <HeaderAdd />
            <HeaderUser />
            <HeaderNotifications />
            <HeaderMenu />
          </div>
        </div>
      </Limiter>
    </header>
  );
};

const styles = {
  root: css`
    height: 60px;
    background-color: ${COLORS.SNOW};
    min-width: ${MIN_WIDTH};
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: 0 1px 4px ${rgba(COLORS.HIGH_SMOKE, 0.15)};
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
};
