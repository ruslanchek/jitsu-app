import React, { FC, Fragment } from 'react';
import { css } from '@emotion/core';
import { EditorView } from '../ui/editor/EditorView';
import { HeaderView } from '../ui/header/HeaderView';
import { Limiter } from '../ui/common/Limiter';
import { TitleEditable } from '../ui/common/TitleEditable';
import { DocumentId } from '../ui/document/DocumentId';
import { DocumentDueDate } from '../ui/document/DocumentDueDate';
import { DocumentToolbar } from '../ui/document/DocumentToolbar';
import { DocumentAssignedTo } from '../ui/document/DocumentAssignedTo';
import { DocumentMood } from '../ui/document/DocumentMood';
import { DocumentStatus } from '../ui/document/DocumentStatus';
import { DocumentBookmark } from '../ui/document/DocumentBookmark';

export const MainScreen: FC = () => {
  return (
    <Fragment>
      <HeaderView />
      <Limiter>
        <main css={styles.main}>
          <DocumentToolbar
            items={[
              <DocumentId id='254' />,
              <DocumentBookmark mark />,
              <DocumentStatus />,
              <DocumentDueDate date={new Date()} />,
              <DocumentAssignedTo user='m_brtn' />,
              <DocumentMood />,
            ]}
          />
          <TitleEditable text='Editable artifacts still kept unchanged after saving' editable />
          <EditorView />
        </main>
      </Limiter>
    </Fragment>
  );
};

const styles = {
  root: css``,

  main: css`
    padding: 40px 0;
  `,
};
