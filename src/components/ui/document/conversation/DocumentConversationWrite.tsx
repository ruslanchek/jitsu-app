import React, { FC } from 'react';
import { css } from '@emotion/core';
import { useCreateConversation } from '../../../../hooks/useCreateConversation';
import { useForm } from 'react-hook-form';
import { Button } from '../../buttons/Button';
import { DocumentModel } from '../../../../models/document';
import { ConversationMutationModel } from '../../../../models/conversation';

interface IProps {
  document: DocumentModel;
}

export const DocumentConversationWrite: FC<IProps> = ({ document }) => {
  const { createConversation } = useCreateConversation();
  const { handleSubmit, register, reset } = useForm<ConversationMutationModel>();

  const onSubmit = async (model: ConversationMutationModel) => {
    await createConversation(document.id, model);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <textarea name='text' ref={register({ required: true, minLength: 1 })} defaultValue='' />
      <Button size='large' type='submit' color='default'>
        Submit
      </Button>
    </form>
  );
};

const styles = {
  root: css``,
};
