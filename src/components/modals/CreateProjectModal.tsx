import React, { FC, useState } from 'react';
import { css } from '@emotion/core';
import { Modal } from '../ui/modals/Modal';
import { EOLocale, useTranslator } from 'eo-locale';
import { Button } from '../ui/buttons/Button';
import { EPhrase } from '../../locales/EPhrase';
import { DocumentHeaderTitle } from '../ui/document/header/DocumentHeaderTitle';
import { DocumentHeaderContainer } from '../ui/document/header/DocumentHeaderContainer';
import { MODAL_SIZE } from '../../common/ui';
import { useForm, Controller } from 'react-hook-form';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { navigate } from '@reach/router';
import { PATHS } from '../../common/paths';

const CREATE_PROJECT = gql`
  mutation CreateProject($name: String!) {
    createProject(input: { name: $name }) {
      id
      name
    }
  }
`;

interface IModel {
  name: string;
}

interface IProps {
  handleClose: () => void;
}

export const CreateProjectModal: FC<IProps> = ({ handleClose }) => {
  const translator = useTranslator();
  const { handleSubmit, errors, control } = useForm<IModel>();
  const [createProject, { loading }] = useMutation(CREATE_PROJECT);
  async function onSubmit(model: IModel) {
    const result = await createProject({ variables: model });
    if (result?.data?.createProject?.id) {
      await navigate(PATHS.PROJECT.replace(':id', result?.data?.createProject?.id));
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
