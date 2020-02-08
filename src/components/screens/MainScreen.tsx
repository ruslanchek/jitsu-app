import React, { FC, useState } from 'react';
import { css } from '@emotion/core';
import { DocumentHeaderTitle } from '../ui/document/header/DocumentHeaderTitle';
import { DocumentHeaderBarId } from '../ui/document/header/DocumentHeaderBarId';
import { DocumentHeaderBarDueDate } from '../ui/document/header/DocumentHeaderBarDueDate';
import { DocumentHeaderBar } from '../ui/document/header/DocumentHeaderBar';
import { DocumentHeaderBarAssignedTo } from '../ui/document/header/DocumentHeaderBarAssignedTo';
import { DocumentHeaderBarLabel } from '../ui/document/header/DocumentHeaderBarLabel';
import { DocumentHeaderBarStatus } from '../ui/document/header/DocumentHeaderBarStatus';
import { DocumentHeaderBarBookmark } from '../ui/document/header/DocumentHeaderBarBookmark';
import { DocumentHeaderBarTags } from '../ui/document/header/DocumentHeaderBarTags';
import { DocumentHeaderBarUpdatedDate } from '../ui/document/header/DocumentHeaderBarUpdatedDate';
import { DocumentHeaderBarPriority } from '../ui/document/header/DocumentHeaderBarPriority';
import { PageWrapper } from '../common/PageWrapper';
import { DocumentHeaderBarGroup } from '../ui/document/header/DocumentHeaderBarGroup';
import { DocumentSideNav } from '../ui/document/side-nav/DocumentSideNav';
import { DocumentHeaderContainer } from '../ui/document/header/DocumentHeaderContainer';
import { DocumentWidgetsBar } from '../ui/document/widgets-bar/DocumentWidgetsBar';
import { DocumentBody, IDocumentBodyElement } from '../ui/document/body/DocumentBody';
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
          <DocumentHeaderContainer>
            <DocumentHeaderBarGroup>
              <DocumentHeaderBar
                align='left'
                items={[
                  <DocumentHeaderBarId id='254' />,
                  <DocumentHeaderBarBookmark mark />,
                  <DocumentHeaderBarStatus />,
                  <DocumentHeaderBarPriority />,
                  <DocumentHeaderBarDueDate date={new Date()} />,
                  <DocumentHeaderBarAssignedTo user='m_brtn' />,
                  <DocumentHeaderBarLabel />,
                ]}
              />
            </DocumentHeaderBarGroup>
            <DocumentHeaderTitle editable value='Frontend Collective: Week #1' />
            <DocumentHeaderBarGroup>
              <DocumentHeaderBar
                align='left'
                items={[
                  <DocumentHeaderBarUpdatedDate user='m_brtn' date={new Date()} />,
                  <DocumentHeaderBarTags tags={['Asana', 'Connectivity', 'CSS']} />,
                ]}
              />
            </DocumentHeaderBarGroup>
          </DocumentHeaderContainer>
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
