import React, { FC } from 'react';
import { css } from '@emotion/core';
import { ScreenWrapper } from '../common/ScreenWrapper';
import { DocumentSideNav } from '../ui/document/side-nav/DocumentSideNav';
import { RouteComponentProps } from '@reach/router';
import { useDocument } from '../../hooks/useDocument';
import { DocumentHeaderTitle } from '../ui/document/header/DocumentHeaderTitle';
import { DocumentHeaderContainer } from '../ui/document/header/DocumentHeaderContainer';
import { DocumentConversation } from '../ui/document/conversation/DocumentConversation';
import { MAIN_PADDING } from '../../common/ui';

interface IProps extends RouteComponentProps {
  projectId?: string;
  documentId?: string;
}

export const DocumentConversationScreen: FC<IProps> = ({ projectId, documentId }) => {
  const { document, loading } = useDocument(documentId);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (projectId && documentId && document) {
    return (
      <ScreenWrapper showHeader>
        <div css={styles.root}>
          <div css={styles.side}>
            <DocumentSideNav projectId={projectId} documentId={documentId} />
          </div>
          <div css={styles.main}>
            <DocumentConversation document={document}/>
          </div>
        </div>
      </ScreenWrapper>
    );
  } else {
    return null;
  }
};

const styles = {
  root: css`
    display: flex;
    justify-content: space-between;
    position: relative;
    height: 100%;
  `,

  side: css`
    width: 220px;
    min-width: 220px;
    position: relative;
    padding: ${MAIN_PADDING.VERTICAL} 0;
  `,

  main: css`
    flex-grow: 1;
    margin-left: 60px;
  `,
};
