import React, { FC } from 'react';
import { css } from '@emotion/core';
import { Document } from '../../../../models/document';
import { useConversations } from '../../../../hooks/useConversations';
import { useForm } from 'react-hook-form';
import { Button } from '../../buttons/Button';
import { useCreateConversation } from '../../../../hooks/useCreateConversation';
import { DateFormatter } from '../../formatters/DateFormatter';

interface IProps {
  document: Document;
}

interface IModel {
  text: string;
}

export const DocumentConversation: FC<IProps> = ({ document }) => {
  const { loading, conversations } = useConversations(document.id);
  const { createConversation } = useCreateConversation();
  const { handleSubmit, errors, register } = useForm<IModel>();

  function onSubmit(model: IModel) {
    createConversation(document.id, model);
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (conversations) {
    return (
      <div css={styles.root}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <textarea name='text' ref={register} defaultValue='' />
          <Button size='large' type='submit' color='default'>
            Submit
          </Button>
        </form>

        {conversations.map(conversation => (
          <div key={conversation.id}>
            <div>
              <DateFormatter date={conversation.date} time />
            </div>
            <div>{conversation.text}</div>
            <div>{conversation.user.id}</div>
            <br />
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
