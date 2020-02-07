import React, { FC } from 'react';
import { EditorView } from '../ui/editor/EditorView';
import { DocumentTitleEditable } from '../ui/document/DocumentTitleEditable';
import { DocumentToolBarId } from '../ui/document/tool-bar/DocumentToolBarId';
import { DocumentToolBarDueDate } from '../ui/document/tool-bar/DocumentToolBarDueDate';
import { DocumentToolBar } from '../ui/document/tool-bar/DocumentToolBar';
import { DocumentToolBarAssignedTo } from '../ui/document/tool-bar/DocumentToolBarAssignedTo';
import { DocumentToolBarLabel } from '../ui/document/tool-bar/DocumentToolBarLabel';
import { DocumentToolBarStatus } from '../ui/document/tool-bar/DocumentToolBarStatus';
import { DocumentToolBarBookmark } from '../ui/document/tool-bar/DocumentToolBarBookmark';
import { DocumentToolBarTags } from '../ui/document/tool-bar/DocumentToolBarTags';
import { DocumentToolBarUpdatedDate } from '../ui/document/tool-bar/DocumentToolBarUpdatedDate';
import { DocumentTimeline } from '../ui/document/DocumentTimeline';
import { DocumentToolBarPriority } from '../ui/document/tool-bar/DocumentToolBarPriority';
import { PageWrapper } from '../common/PageWrapper';
import { DocumentToolBarGroup } from '../ui/document/tool-bar/DocumentToolBarGroup';
import { css } from '@emotion/core';
import { COLORS } from '../../common/colors';
import { BORDER_RADIUS } from '../../common/ui';

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
        <DocumentToolBar align='right' items={[<DocumentToolBarLabel />]} />
      </DocumentToolBarGroup>
      <DocumentTitleEditable value='Frontend Collective: Week #1' />
      <div css={styles.root}>
        <EditorView />
        <div css={styles.side}></div>
      </div>
      <DocumentToolBarGroup>
        <DocumentToolBar align='left' items={[<DocumentToolBarTags tags={['Asana', 'Connectivity', 'CSS']} />]} />
        <DocumentToolBar align='right' items={[<DocumentToolBarUpdatedDate user='m_brtn' date={new Date()} />]} />
      </DocumentToolBarGroup>
      <DocumentTimeline />
    </PageWrapper>
  );
};

const styles = {
  root: css`
    display: flex;
    justify-content: space-between;
    position: relative;
  `,

  side: css`
    width: 420px;
    position: sticky;
    margin-left: 40px;
    box-sizing: border-box;
    padding: 20px 30px;
    top: 100px;
    height: 400px;
    background-color: ${COLORS.SNOW};
    border-radius: ${BORDER_RADIUS.MEDIUM};
  `,
};
