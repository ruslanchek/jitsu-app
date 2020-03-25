import React, { FC } from 'react';
import { css } from '@emotion/core';
import { IModalProps, Modal } from '../ui/modals/Modal';
import { DocumentHeaderTitle } from '../ui/document/header/DocumentHeaderTitle';
import { DocumentHeaderBarGroup } from '../ui/document/header/DocumentHeaderBarGroup';
import { DocumentHeaderBar } from '../ui/document/header/DocumentHeaderBar';
import { DocumentHeaderBarPriority } from '../ui/document/header/DocumentHeaderBarPriority';
import { DocumentHeaderBarAssignedTo } from '../ui/document/header/DocumentHeaderBarAssignedTo';
import { DocumentHeaderBarLabel } from '../ui/document/header/DocumentHeaderBarLabel';
import { DocumentHeaderBarTags } from '../ui/document/header/DocumentHeaderBarTags';
import { DocumentHeaderContainer } from '../ui/document/header/DocumentHeaderContainer';
import { Button } from '../ui/buttons/Button';
import { EOLocale, useTranslator } from 'eo-locale';
import { EPhrase } from '../../locales/EPhrase';
import { MODAL_SIZE } from '../../common/ui';
import { Controller, useForm } from 'react-hook-form';
import { useCreateDocument } from '../../hooks/useCreateDocument';
import { EDocumentPriority } from '../../models/document';
import { useCurrentProject } from '../../hooks/useCurrentProject';

interface IProps extends IModalProps {}

interface IModel {
  name: string;
  dueDate: Date;
}

export const CreateTaskModal: FC<IProps> = ({ handleClose }) => {
  const translator = useTranslator();
  const { currentProject } = useCurrentProject();
  const { createDocument, loading } = useCreateDocument();
  const { handleSubmit, errors, control, register, setValue, getValues } = useForm<IModel>({
    defaultValues: {
      name: '',
      dueDate: new Date(),
    },
  });
  const model = getValues();
  async function onSubmit(model: IModel) {
    if (currentProject) {
      const document = await createDocument(currentProject.id, model);
      if (document?.id) {
        handleClose();
      }
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
          <DocumentHeaderBarGroup>
            <DocumentHeaderBar
              align='left'
              items={[
                <DocumentHeaderBarPriority onChange={() => {}} value={EDocumentPriority.Default} />,
                // <DocumentHeaderBarDueDate date={model.dueDate} onChange={value => setValue('dueDate', value)} />,
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
