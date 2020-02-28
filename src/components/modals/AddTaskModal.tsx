import React, { FC, useState } from 'react';
import { css } from '@emotion/core';
import { Modal } from '../ui/modals/Modal';
import { DocumentHeaderTitle } from '../ui/document/header/DocumentHeaderTitle';

interface IProps {
  handleClose: () => void;
}

export const AddTaskModal: FC<IProps> = ({ handleClose }) => {
  const [title, setTitle] = useState('');
  return (
    <Modal handleClose={handleClose}>
      <DocumentHeaderTitle editable value={title} onChange={value => setTitle(value)} placeholder='Task name' />
    </Modal>
  );
};

const styles = {
  root: css``,
};
