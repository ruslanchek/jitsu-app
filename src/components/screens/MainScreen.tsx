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
import { DocumentTags } from '../ui/document/DocumentTags';
import { DocumentCreatedBy } from '../ui/document/DocumentCreatedBy';
import { DocumentUpdatedDate } from '../ui/document/DocumentUpdatedDate';
import { DocumentTimeline } from '../ui/document/DocumentTimeline';
import { DocumentPriority } from '../ui/document/DocumentPriority';

export const MainScreen: FC = () => {
  return (
    <Fragment>
      <HeaderView />
      <Limiter>
        <main css={styles.main}>
          <div css={styles.toolBars}>
            <DocumentToolbar
              align='left'
              items={[
                <DocumentId id='254' />,
                <DocumentBookmark mark />,
                <DocumentStatus />,
                <DocumentPriority />,
                <DocumentDueDate date={new Date()} />,
                <DocumentAssignedTo user='m_brtn' />,
              ]}
            />
            <DocumentToolbar align='right' items={[<DocumentMood />]} />
          </div>
          <TitleEditable text='Editable artifacts still kept unchanged after saving' editable />
          <EditorView />
          <div css={styles.toolBars}>
            <DocumentToolbar align='left' items={[<DocumentTags tags={['Asana', 'Connectivity', 'CSS']} />]} />
            <DocumentToolbar
              align='right'
              items={[<DocumentCreatedBy user='superior_monk' />, <DocumentUpdatedDate date={new Date()} />]}
            />
          </div>
          <DocumentTimeline />
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

  toolBars: css`
    display: flex;
    justify-content: space-between;
  `,
};
