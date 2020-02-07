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
import { DocumentToolBarPriority } from '../ui/document/tool-bar/DocumentToolBarPriority';
import { PageWrapper } from '../common/PageWrapper';
import { DocumentToolBarGroup } from '../ui/document/tool-bar/DocumentToolBarGroup';
import { DocumentSideNav } from '../ui/document/DocumentSideNav';
import { css } from '@emotion/core';

export const MainScreen: FC = () => {
  return (
    <PageWrapper>
      <div css={styles.root}>
        <div css={styles.side}>
          <div css={styles.sticky}>
            <DocumentSideNav />
          </div>
        </div>
        <div css={styles.main}>
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
                <DocumentToolBarLabel />,
              ]}
            />
          </DocumentToolBarGroup>
          <DocumentTitleEditable editable value='Frontend Collective: Week #1' />
          <DocumentToolBarGroup>
            <DocumentToolBar
              align='left'
              items={[
                <DocumentToolBarUpdatedDate user='m_brtn' date={new Date()} />,
                <DocumentToolBarTags tags={['Asana', 'Connectivity', 'CSS']} />,
              ]}
            />
          </DocumentToolBarGroup>
          <EditorView />
        </div>
      </div>
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
    width: 260px;
    min-width: 260px;
    box-sizing: border-box;
    position: relative;
  `,

  sticky: css`
    position: sticky;
    top: 100px;
  `,

  main: css`
    flex-grow: 1;
    margin-left: 60px;
  `,
};
