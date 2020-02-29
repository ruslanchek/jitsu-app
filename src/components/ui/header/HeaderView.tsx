import React, { FC } from 'react';
import { css } from '@emotion/core';
import { COLORS } from '../../../common/colors';
import { HeaderLogo } from './HeaderLogo';
import { HeaderCreate } from './HeaderCreate';
import { Limiter } from '../common/Limiter';
import { HeaderUser } from './HeaderUser';
import { HeaderNotifications } from './HeaderNotifications';
import { HeaderMenu } from './HeaderMenu';
import { BOX_SHADOW, MIN_WIDTH, Z_INDEX } from '../../../common/ui';
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
            <HeaderCreate />
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
    z-index: ${Z_INDEX.HEADER};
    box-shadow: ${BOX_SHADOW.SMALL};
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
