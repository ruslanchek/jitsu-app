import React, { FC } from 'react';
import { css } from '@emotion/core';
import { EditorView } from '../ui/editor/EditorView';
import { TitleEditable } from '../ui/common/TitleEditable';
import { DocumentToolBarId } from '../ui/document/tool-bar/DocumentToolBarId';
import { DocumentToolBarDueDate } from '../ui/document/tool-bar/DocumentToolBarDueDate';
import { DocumentToolBar } from '../ui/document/tool-bar/DocumentToolBar';
import { DocumentToolBarAssignedTo } from '../ui/document/tool-bar/DocumentToolBarAssignedTo';
import { DocumentToolBarMood } from '../ui/document/tool-bar/DocumentToolBarMood';
import { DocumentToolBarStatus } from '../ui/document/tool-bar/DocumentToolBarStatus';
import { DocumentToolBarBookmark } from '../ui/document/tool-bar/DocumentToolBarBookmark';
import { DocumentToolBarTags } from '../ui/document/tool-bar/DocumentToolBarTags';
import { DocumentToolBarUpdatedDate } from '../ui/document/tool-bar/DocumentToolBarUpdatedDate';
import { DocumentTimeline } from '../ui/document/DocumentTimeline';
import { DocumentToolBarPriority } from '../ui/document/tool-bar/DocumentToolBarPriority';
import { PageWrapper } from '../common/PageWrapper';

export const MainScreen: FC = () => {
  return (
    <PageWrapper>
      <div css={styles.toolBars}>
        <DocumentToolBar
          align='left'
          items={[
            <DocumentToolBarId id='254' />,
            <DocumentToolBarBookmark mark />,
            <DocumentToolBarStatus />,
            <DocumentToolBarPriority />,
            <DocumentToolBarDueDate date={new Date()} />,
            <DocumentToolBarAssignedTo user='m_brtn' />,
          ]}
        />
        <DocumentToolBar align='right' items={[<DocumentToolBarMood />]} />
      </div>
      <TitleEditable text='Editable artifacts still kept unchanged after saving' editable />
      <EditorView />
      <div css={styles.toolBars}>
        <DocumentToolBar align='left' items={[<DocumentToolBarTags tags={['Asana', 'Connectivity', 'CSS']} />]} />
        <DocumentToolBar align='right' items={[<DocumentToolBarUpdatedDate user='m_brtn' date={new Date()} />]} />
      </div>
      <DocumentTimeline />
    </PageWrapper>
  );
};

const styles = {
  toolBars: css`
    display: flex;
    justify-content: space-between;
  `,
};
