import React, { FC, useState } from 'react';
import { css } from '@emotion/core';
import { Modal } from '../ui/modals/Modal';
import { DocumentHeaderTitle } from '../ui/document/header/DocumentHeaderTitle';
import { DocumentHeaderBarGroup } from '../ui/document/header/DocumentHeaderBarGroup';
import { DocumentHeaderBar } from '../ui/document/header/DocumentHeaderBar';
import { DocumentHeaderBarId } from '../ui/document/header/DocumentHeaderBarId';
import { DocumentHeaderBarBookmark } from '../ui/document/header/DocumentHeaderBarBookmark';
import { DocumentHeaderBarStatus } from '../ui/document/header/DocumentHeaderBarStatus';
import { DocumentHeaderBarPriority } from '../ui/document/header/DocumentHeaderBarPriority';
import { DocumentHeaderBarDueDate } from '../ui/document/header/DocumentHeaderBarDueDate';
import { DocumentHeaderBarAssignedTo } from '../ui/document/header/DocumentHeaderBarAssignedTo';
import { DocumentHeaderBarLabel } from '../ui/document/header/DocumentHeaderBarLabel';
import { DocumentHeaderBarUpdatedDate } from '../ui/document/header/DocumentHeaderBarUpdatedDate';
import { DocumentHeaderBarTags } from '../ui/document/header/DocumentHeaderBarTags';
import { DocumentHeaderContainer } from '../ui/document/header/DocumentHeaderContainer';
import { Button } from '../ui/buttons/Button';

interface IProps {
  handleClose: () => void;
}

export const AddTaskModal: FC<IProps> = ({ handleClose }) => {
  const [title, setTitle] = useState('');
  return (
    <Modal handleClose={handleClose}>
      <div css={styles.root}>
        <DocumentHeaderContainer>
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
          <DocumentHeaderTitle editable value={title} onChange={value => setTitle(value)} placeholder='Task name' />
          <DocumentHeaderBarGroup>
            <DocumentHeaderBar
              align='left'
              items={[
                <DocumentHeaderBarTags tags={['Asana', 'Connectivity', 'CSS']} />,
              ]}
            />
          </DocumentHeaderBarGroup>
        </DocumentHeaderContainer>
        <Button size="large" type="button" color="default">
          Create Task
        </Button>
      </div>
    </Modal>
  );
};

const styles = {
  root: css`
    width: 720px;
  `,
};
