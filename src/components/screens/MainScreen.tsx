import React, { FC } from 'react';
import { EditorView } from '../ui/editor/EditorView';
import { DocumentTitleEditable } from '../ui/document/DocumentTitleEditable';
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
import { DocumentToolBarGroup } from '../ui/document/tool-bar/DocumentToolBarGroup';

export const MainScreen: FC = () => {
  return (
    <PageWrapper>
      <DocumentToolBarGroup>
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
      </DocumentToolBarGroup>
      <DocumentTitleEditable value='Editable artifacts still kept unchanged after saving' editable />
      <EditorView />
      <DocumentToolBarGroup>
        <DocumentToolBar align='left' items={[<DocumentToolBarTags tags={['Asana', 'Connectivity', 'CSS']} />]} />
        <DocumentToolBar align='right' items={[<DocumentToolBarUpdatedDate user='m_brtn' date={new Date()} />]} />
      </DocumentToolBarGroup>
      <DocumentTimeline />
    </PageWrapper>
  );
};

