import React, { FC } from 'react';
import { css } from '@emotion/core';
import { HeaderView } from '../ui/header/HeaderView';
import { HEADER_HEIGHT, MAIN_PADDING, MAX_WIDTH, MIN_WIDTH } from '../../common/ui';
import classNames from 'classnames';
import { SideMenu } from '../side-menu/SideMenu';

interface IProps {
  showHeader?: boolean;
}

export const ScreenWrapper: FC<IProps> = ({ children, showHeader }) => {
  return (
    <div css={styles.root}>
      {showHeader && <HeaderView />}
      <div css={styles.limiter} className={classNames({ header: showHeader })}>
        <main css={styles.main}>{children}</main>
      </div>
      {/* <SideMenu /> */}
    </div>
  );
};

const styles = {
  root: css`
    overflow: scroll;
    height: 100vh;
  `,

  limiter: css`
    max-width: ${MAX_WIDTH};
    min-width: ${MIN_WIDTH};
    margin: 0 auto;
    height: 100vh;

    &.header {
      height: calc(100vh - ${HEADER_HEIGHT});
    }
  `,

  main: css`
    height: 100%;
    padding: 0 ${MAIN_PADDING.HORIZONTAL};
  `,
};
