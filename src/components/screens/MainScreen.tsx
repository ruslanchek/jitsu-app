import React, { FC } from 'react';
import { css } from '@emotion/core';
import { ScreenWrapper } from '../common/ScreenWrapper';
import { DocumentSideNav } from '../ui/document/side-nav/DocumentSideNav';
import { DocumentBody } from '../ui/document/body/DocumentBody';
import { DocumentHeader } from '../ui/document/header/DocumentHeader';
import { RouteComponentProps } from '@reach/router';

export const MainScreen: FC<RouteComponentProps> = () => {
  return (
    <ScreenWrapper>
      <div css={styles.root}>
        <div css={styles.side}>
          <DocumentSideNav />
        </div>
        <div css={styles.main}>
          <DocumentHeader />
          <DocumentBody />
        </div>
      </div>
    </ScreenWrapper>
  );
};

const styles = {
  root: css`
    display: flex;
    justify-content: space-between;
    position: relative;
  `,

  side: css`
    width: 220px;
    min-width: 220px;
    position: relative;
  `,

  main: css`
    flex-grow: 1;
    margin-left: 60px;
  `,
};
