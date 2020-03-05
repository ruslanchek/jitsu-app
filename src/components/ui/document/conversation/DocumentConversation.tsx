import React, { FC } from 'react';
import { css } from '@emotion/core';
import { DocumentModel } from '../../../../models/document';
import { useConversations } from '../../../../hooks/useConversations';
import { DateFormatter } from '../../formatters/DateFormatter';
import { DocumentConversationWrite } from './DocumentConversationWrite';
import { DocumentConversationMessage } from './DocumentConversationMessage';

interface IProps {
  document: DocumentModel;
}

export const DocumentConversation: FC<IProps> = ({ document }) => {
  const { loading, conversations } = useConversations(document.id);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (conversations) {
    return (
      <div css={styles.root}>
        <div css={styles.inner}>
          <div css={styles.stickyBottom}>
            <DocumentConversationWrite document={document} />
          </div>
        </div>
        {conversations.map(conversation => (
          <DocumentConversationMessage conversation={conversation} key={conversation.id} />
        ))}
      </div>
    );
  } else {
    return null;
  }
};

const styles = {
  root: css`
    height: 100%;
    overflow: auto;
  `,

  inner: css``,

  stickyBottom: css`
    position: sticky;
  `,
};
