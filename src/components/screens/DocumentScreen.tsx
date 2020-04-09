import React, { FC } from 'react';
import { css } from '@emotion/core';
import { ScreenWrapper } from '../common/ScreenWrapper';
import { DocumentSideNav } from '../ui/document/side-nav/DocumentSideNav';
import { DocumentBody } from '../ui/document/body/DocumentBody';
import { DocumentHeader } from '../ui/document/header/DocumentHeader';
import { RouteComponentProps } from '@reach/router';
import { useDocument } from '../../hooks/useDocument';
import { MAIN_PADDING } from '../../common/ui';

interface IProps extends RouteComponentProps {
  projectId?: string;
  documentId?: string;
}

export const DocumentScreen: FC<IProps> = ({ projectId, documentId }) => {
  const { data, loading, error } = useDocument(documentId);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (projectId && documentId && data) {
    return (
      <ScreenWrapper showHeader>
        <div css={styles.root}>
          <div css={styles.side}>
            <DocumentSideNav projectId={projectId} documentId={documentId} />
          </div>
          <div css={styles.main}>
            <DocumentHeader document={data} />
            <DocumentBody document={data} />
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
    padding: ${MAIN_PADDING.VERTICAL} 0;
  `,
};
