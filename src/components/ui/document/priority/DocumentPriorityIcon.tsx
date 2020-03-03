import React, { FC } from 'react';
import { EDocumentPriority } from '../../../../models/document';
import { FiChevronsUp, FiChevronUp, FiChevronDown, FiChevronsDown } from 'react-icons/fi';

interface IProps {
  priority: EDocumentPriority;
}

export const DocumentPriorityIcon: FC<IProps> = ({ priority }) => {
  switch (priority) {
    case EDocumentPriority.High: {
      return <FiChevronsUp />;
    }

    case EDocumentPriority.Medium: {
      return <FiChevronUp />;
    }

    case EDocumentPriority.Low: {
      return <FiChevronDown />;
    }

    case EDocumentPriority.Default:
    default: {
      return <FiChevronsDown />;
    }
  }
};
