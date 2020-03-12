import React, { FC, useState } from 'react';
import { css } from '@emotion/core';
import { IModalProps, Modal } from '../ui/modals/Modal';
import { EOLocale, useTranslator } from 'eo-locale';
import { Button } from '../ui/buttons/Button';
import { EPhrase } from '../../locales/EPhrase';
import { DocumentHeaderTitle } from '../ui/document/header/DocumentHeaderTitle';
import { DocumentHeaderContainer } from '../ui/document/header/DocumentHeaderContainer';
import { MODAL_SIZE } from '../../common/ui';
import { useForm, Controller } from 'react-hook-form';
import { PATHS } from '../../common/paths';
import { useCreateProject } from '../../hooks/useCreateProject';
import { useNavigate } from '@reach/router';

interface IModel {
  name: string;
}

interface IProps extends IModalProps {}

export const CreateProjectModal: FC<IProps> = ({ handleClose }) => {
  const translator = useTranslator();
  const navigate = useNavigate();
  const { loading, createProject } = useCreateProject();
  const { handleSubmit, errors, control } = useForm<IModel>();
  async function onSubmit(model: IModel) {
    const project = await createProject(model);
    if (project?.id) {
      await navigate(PATHS.PROJECT_TASKS.replace(':projectId', project.id));
      handleClose();
    }
  }
  const [title, setTitle] = useState('');
  return (
    <Modal handleClose={handleClose}>
      <form css={styles.root} onSubmit={handleSubmit(onSubmit)}>
        <DocumentHeaderContainer>
          <Controller
            as={
              <DocumentHeaderTitle
                editable
                value={title}
                onChange={value => setTitle(value)}
                placeholder={translator.translate(EPhrase.Create_project_Title_placeholder)}
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
          {errors.name && <div>This field is required</div>}
        </DocumentHeaderContainer>
        <Button size='large' type='submit' color='default' loading={loading}>
          <EOLocale.Text id={EPhrase.Create_project_Submit} />
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
