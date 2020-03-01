import React, { FC, useEffect, useState } from 'react';
import { css } from '@emotion/core';
import { Modal } from '../ui/modals/Modal';
import { DocumentHeaderTitle } from '../ui/document/header/DocumentHeaderTitle';
import { DocumentHeaderBarGroup } from '../ui/document/header/DocumentHeaderBarGroup';
import { DocumentHeaderBar } from '../ui/document/header/DocumentHeaderBar';
import { DocumentHeaderBarPriority } from '../ui/document/header/DocumentHeaderBarPriority';
import { DocumentHeaderBarDueDate } from '../ui/document/header/DocumentHeaderBarDueDate';
import { DocumentHeaderBarAssignedTo } from '../ui/document/header/DocumentHeaderBarAssignedTo';
import { DocumentHeaderBarLabel } from '../ui/document/header/DocumentHeaderBarLabel';
import { DocumentHeaderBarTags } from '../ui/document/header/DocumentHeaderBarTags';
import { DocumentHeaderContainer } from '../ui/document/header/DocumentHeaderContainer';
import { Button } from '../ui/buttons/Button';
import { EOLocale, useTranslator } from 'eo-locale';
import { EPhrase } from '../../locales/EPhrase';
import { MODAL_SIZE } from '../../common/ui';
import { Controller, useForm } from 'react-hook-form';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';

const CREATE_TASK = gql`
  mutation CreateDocument($name: String!, $projectId: ID!) {
    createDocument(input: { name: $name, projectId: $projectId }) {
      id
    }
  }
`;

interface IProps {
  handleClose: () => void;
}

interface IModel {
  name: string;
  projectId: string;
  dueDate: Date;
}

export const CreateTaskModal: FC<IProps> = ({ handleClose }) => {
  const translator = useTranslator();
  const { handleSubmit, errors, control, register, setValue, getValues } = useForm<IModel>();
  const model = getValues();
  const [createTask, { loading }] = useMutation(CREATE_TASK);
  async function onSubmit(model: IModel) {
    console.log(model);
    const result = await createTask({ variables: model });
    if (result?.data?.createProject?.id) {
      // await navigate(PATHS.PROJECT.replace(':id', result?.data?.createProject?.id));
      handleClose();
    }
  }

  return (
    <Modal handleClose={handleClose}>
      <form css={styles.root} onSubmit={handleSubmit(onSubmit)}>
        <DocumentHeaderContainer>
          <Controller
            as={
              <DocumentHeaderTitle
                editable
                value={model.name}
                onChange={value => setValue('name', value)}
                placeholder={translator.translate(EPhrase.Create_task_Title_placeholder)}
              />
            }
            rules={{
              required: true,
              minLength: 3,
            }}
            name='name'
            control={control}
            defaultValue=''
          />
          <input name='projectId' defaultValue='5e9339f4-1d86-48d2-9791-602591368e0e' ref={register} />
          <DocumentHeaderBarGroup>
            <DocumentHeaderBar
              align='left'
              items={[
                <DocumentHeaderBarPriority />,
                <DocumentHeaderBarDueDate date={model.dueDate} onChange={value => setValue('dueDate', value)} />,
                <DocumentHeaderBarAssignedTo user='m_brtn' />,
                <DocumentHeaderBarLabel />,
              ]}
            />
          </DocumentHeaderBarGroup>
          <DocumentHeaderBarGroup>
            <DocumentHeaderBar
              align='left'
              items={[<DocumentHeaderBarTags tags={['Asana', 'Connectivity', 'CSS']} />]}
            />
          </DocumentHeaderBarGroup>
        </DocumentHeaderContainer>
        <Button size='large' type='submit' color='default' loading={loading}>
          <EOLocale.Text id={EPhrase.Create_task_Submit} />
        </Button>
      </form>
    </Modal>
  );
};

const styles = {
  root: css`
    width: ${MODAL_SIZE.LARGE};
  `,
};
