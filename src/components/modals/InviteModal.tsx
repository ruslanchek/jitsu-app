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
import { useCreateInvite } from '../../hooks/useCreateInvite';
import { useCurrentProject } from '../../hooks/useCurrentProject';
import { VALIDATION_PATTERNS } from '../../common/validation-patterns';

interface IModel {
  invitedUserEmail: string;
}

interface IProps extends IModalProps {}

export const InviteModal: FC<IProps> = ({ handleClose }) => {
  const translator = useTranslator();
  const { currentProject } = useCurrentProject();
  const { loading, createInvite } = useCreateInvite();
  const { handleSubmit, errors, control } = useForm<IModel>();
  async function onSubmit(model: IModel) {
    if (currentProject) {
      const result = await createInvite(currentProject.id, model);
      console.log(result);
    }
  }
  const [invitedUserEmail, setInvitedUserEmail] = useState('');
  return (
    <Modal handleClose={handleClose}>
      <form css={styles.root} onSubmit={handleSubmit(onSubmit)}>
        <DocumentHeaderContainer>
          <Controller
            as={
              <DocumentHeaderTitle
                editable
                value={invitedUserEmail}
                onChange={value => setInvitedUserEmail(value)}
                placeholder={translator.translate(EPhrase.Create_invite_Email_placeholder)}
              />
            }
            rules={{
              required: true,
              pattern: VALIDATION_PATTERNS.EMAIL,
            }}
            name='invitedUserEmail'
            control={control}
            defaultValue=''
          />
          {errors.invitedUserEmail && <div>This field is required</div>}
        </DocumentHeaderContainer>
        <Button size='large' type='submit' color='default' loading={loading}>
          <EOLocale.Text id={EPhrase.Create_invite_Submit} />
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
