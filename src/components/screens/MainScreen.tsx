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

export const MainScreen: FC = () => {
  return (
    <Fragment>
      <HeaderView />
      <Limiter>
        <main css={styles.main}>
          <div css={styles.toolBars}>
            <DocumentToolbar
              items={[
                <DocumentId id='254' />,
                <DocumentBookmark mark />,
                <DocumentStatus />,
                <DocumentDueDate date={new Date()} />,
                <DocumentAssignedTo user='m_brtn' />,
              ]}
            />
            <DocumentToolbar items={[<DocumentMood />]} />
          </div>
          <TitleEditable text='Editable artifacts still kept unchanged after saving' editable />
          <EditorView />
          <div css={styles.toolBars}>
            <DocumentToolbar items={[<DocumentTags tags={['Asana', 'Connectivity', 'CSS']} />]} />
            <DocumentToolbar
              items={[<DocumentCreatedBy user='superior_monk' />, <DocumentUpdatedDate date={new Date()} />]}
            />
          </div>
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
