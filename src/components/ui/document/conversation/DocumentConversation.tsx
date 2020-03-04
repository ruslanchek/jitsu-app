import React, { FC } from 'react';
import { css } from '@emotion/core';
import { Document } from '../../../../models/document';
import { useConversations } from '../../../../hooks/useConversations';
import { DateFormatter } from '../../formatters/DateFormatter';
import { DocumentConversationWrite } from './DocumentConversationWrite';

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
        <div css={styles.inner}>
          {/*<div css={styles.stickyBottom}>*/}
          {/*  <DocumentConversationWrite document={document} />*/}
          {/*</div>*/}
        </div>
        {/*{conversations.map(conversation => (*/}
        {/*  <div key={conversation.id}>*/}
        {/*    <div>*/}
        {/*      <DateFormatter date={conversation.date} time />*/}
        {/*    </div>*/}
        {/*    <div>{conversation.text}</div>*/}
        {/*    <div>{conversation.user.id}</div>*/}
        {/*    <br />*/}
        {/*  </div>*/}
        {/*))}*/}
      </div>
    );
  } else {
    return null;
  }
};

const styles = {
  root: css`
    background-color: red;
    display: flex;
    flex-grow: 1;
    height: 100%;
  `,

  inner: css`
    //height: calc(100%);
  `,

  stickyBottom: css`
    position: sticky;
  `,
};
