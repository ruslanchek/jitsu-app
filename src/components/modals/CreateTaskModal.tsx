import React, { FC, useState } from 'react';
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

interface IProps {
  handleClose: () => void;
}

export const CreateTaskModal: FC<IProps> = ({ handleClose }) => {
  const translator = useTranslator();
  const [title, setTitle] = useState('');
  return (
    <Modal handleClose={handleClose}>
      <div css={styles.root}>
        <DocumentHeaderContainer>
          <DocumentHeaderTitle
            editable
            value={title}
            onChange={value => setTitle(value)}
            placeholder={translator.translate(EPhrase.Create_task_Title_placeholder)}
          />
          <DocumentHeaderBarGroup>
            <DocumentHeaderBar
              align='left'
              items={[
                <DocumentHeaderBarPriority />,
                <DocumentHeaderBarDueDate date={new Date()} />,
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
        <Button size='large' type='button' color='default'>
          <EOLocale.Text id={EPhrase.Create_task_Submit} />
        </Button>
      </div>
    </Modal>
  );
};

const styles = {
  root: css`
    width: ${MODAL_SIZE.LARGE};
  `,
};
