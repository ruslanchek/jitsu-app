import React, { FC } from 'react';
import { css } from '@emotion/core';
import { ScreenWrapper } from '../common/ScreenWrapper';
import { Link, RouteComponentProps } from '@reach/router';
import { PATHS } from '../../common/paths';
import { MAIN_PADDING } from '../../common/ui';
import { useStore } from 'react-stores';
import { commonStore } from '../../stores/common-store';

export const MainScreen: FC<RouteComponentProps> = () => {
  const state = useStore(commonStore);

  return (
    <ScreenWrapper showHeader>
      <div css={styles.root}>
        <Link to={PATHS.PROJECTS}>Projects</Link>
        <br /><br />
        authorized: {String(state.authorized)}
        <br />
        appReady: {String(state.appReady)}
        <br />
        me: {JSON.stringify(state.me)}
        <br />
      </div>
    </ScreenWrapper>
  );
};

const styles = {
  root: css`
    padding: ${MAIN_PADDING.VERTICAL} 0;
  `,
};
