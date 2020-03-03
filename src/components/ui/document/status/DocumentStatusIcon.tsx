import React, { FC } from 'react';
import { EDocumentStatus } from '../../../../models/document';
import { FiPlay, FiPause, FiCheck, FiArchive, FiClock } from 'react-icons/fi';

interface IProps {
  status: EDocumentStatus;
}

export const DocumentStatusIcon: FC<IProps> = ({ status }) => {
  switch (status) {
    case EDocumentStatus.InProgress: {
      return <FiPlay />;
    }

    case EDocumentStatus.Paused: {
      return <FiPause />;
    }

    case EDocumentStatus.Completed: {
      return <FiCheck />;
    }

    case EDocumentStatus.Archived: {
      return <FiArchive />;
    }

    case EDocumentStatus.Idle:
    default: {
      return <FiClock />;
    }
  }
};
