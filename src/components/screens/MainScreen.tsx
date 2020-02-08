import React, { FC, useState } from 'react';
import { css } from '@emotion/core';
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
import { DocumentHeader } from '../ui/document/DocumentHeader';
import { DocumentWidgetsBar } from '../ui/document/widgets/widgets-bar/DocumentWidgetsBar';
import { DocumentBody, IDocumentBodyElement } from '../ui/document/DocumentBody';
import { DocumentWidgetSubTasks } from '../ui/document/widgets/sub-tasks/DocumentWidgetSubTasks';
import { EditorView } from '../ui/editor/EditorView';

export const MainScreen: FC = () => {
  const [bodyElements, setBodyElements] = useState<IDocumentBodyElement[]>([
    {
      id: '1',
      component: (
        <DocumentWidgetSubTasks
          items={[
            { id: '1', checked: true, label: 'Check connectivity' },
            { id: '2', checked: false, label: 'Finish API' },
            { id: '3', checked: false, label: 'Upload images to Amazon S3' },
          ]}
        />
      ),
    },
    {
      id: '2',
      component: (
        <DocumentWidgetSubTasks
          items={[
            { id: '1', checked: true, label: 'Check connectivity' },
            { id: '2', checked: false, label: 'Finish API' },
            { id: '3', checked: false, label: 'Upload images to Amazon S3' },
          ]}
        />
      ),
    },
    {
      id: '3',
      component: (
        <DocumentWidgetSubTasks
          items={[
            { id: '1', checked: true, label: 'Check connectivity' },
            { id: '2', checked: false, label: 'Finish API' },
            { id: '3', checked: false, label: 'Upload images to Amazon S3' },
          ]}
        />
      ),
    },
    {
      id: '4',
      component: (
        <EditorView />
      ),
    },
    {
      id: '5',
      component: (
        <DocumentWidgetSubTasks
          items={[
            { id: '1', checked: true, label: 'Check connectivity' },
            { id: '2', checked: false, label: 'Finish API' },
            { id: '3', checked: false, label: 'Upload images to Amazon S3' },
          ]}
        />
      ),
    },
  ]);

  return (
    <PageWrapper>
      <div css={styles.root}>
        <div css={styles.side}>
          <div css={styles.sticky}>
            <DocumentSideNav />
          </div>
        </div>

        <div css={styles.main}>
          <DocumentHeader>
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
          </DocumentHeader>
          <div css={styles.document}>
            <div css={styles.documentBody}>
              <DocumentBody
                elements={bodyElements}
                onReorder={setBodyElements}
              />
            </div>
            <div css={styles.tools}>
              <div css={styles.sticky}>
                <DocumentWidgetsBar />
              </div>
            </div>
          </div>
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

  document: css`
    display: flex;
  `,

  documentBody: css`
    flex-grow: 1;
  `,

  tools: css`
    width: 60px;
    min-width: 60px;
    margin-left: 30px;
    position: relative;
  `,
};
