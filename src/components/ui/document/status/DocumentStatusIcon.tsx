import React, { FC } from 'react';
import { EDocumentStatus } from '../../../../models/document';
import { FaPlay, FaPause, FaCheck, FaArchive, FaClock } from 'react-icons/fa';

interface IProps {
  status: EDocumentStatus;
}

export const DocumentStatusIcon: FC<IProps> = ({ status }) => {
  switch (status) {
    case EDocumentStatus.InProgress: {
      return <FaPlay />;
    }

    case EDocumentStatus.Paused: {
      return <FaPause />;
    }

    case EDocumentStatus.Completed: {
      return <FaCheck />;
    }

    case EDocumentStatus.Archived: {
      return <FaArchive />;
    }

    case EDocumentStatus.Idle:
    default: {
      return <FaClock />;
    }
  }
};
