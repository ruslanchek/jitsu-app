import React, { FC } from 'react';
import { css } from '@emotion/core';
import { Document } from '../../../../models/document';
import { useConversations } from '../../../../hooks/useConversations';

interface IProps {
  document: Document;
}

export const DocumentConversation: FC<IProps> = ({ document }) => {
  const { loading, conversations } = useConversations(document.id);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (conversations) {
    return (
      <div css={styles.root}>
        {conversations.map(conversation => (
          <div>
            <div>{conversation.id}</div>
            <div>{conversation.text}</div>
            <div>{conversation.user.id}</div>
          </div>
        ))}
      </div>
    );
  } else {
    return null;
  }
};

const styles = {
  root: css``,
};
