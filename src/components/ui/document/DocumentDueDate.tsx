import React, { FC } from 'react';
import { COLORS } from '../../../common/colors';
import { DateFormatter } from '../formatters/DateFormatter';
import { EPhrase } from '../../../locales/EPhrase';
import { DocumentToolBarItem } from './DocumentToolBarItem';
import { DocumentToolBarButton } from './DocumentToolBarButton';

interface IProps {
  date: Date;
}

export const DocumentDueDate: FC<IProps> = ({ date }) => {
  return (
    <DocumentToolBarItem label={EPhrase.Document_Due_to}>
      <DocumentToolBarButton color={COLORS.FIRE_ROSE}>
        <DateFormatter date={date} />
      </DocumentToolBarButton>
    </DocumentToolBarItem>
  );
};
