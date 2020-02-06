import React, { FC } from 'react';
import { COLORS } from '../../../common/colors';
import { DateFormatter } from '../formatters/DateFormatter';
import { EPhrase } from '../../../locales/EPhrase';
import { DocumentToolBarItem } from './DocumentToolBarItem';
import { DocumentToolBarButton } from './DocumentToolBarButton';

interface IProps {
  date: Date;
  user: string;
}

export const DocumentUpdatedDate: FC<IProps> = ({ date, user }) => {
  return (
    <DocumentToolBarItem label={EPhrase.Document_Updated}>
      <DocumentToolBarButton color={COLORS.HIGH_SMOKE}>
        <DateFormatter date={date} />
      </DocumentToolBarButton>
      <DocumentToolBarButton background color={COLORS.HIGH_SMOKE}>
        @{user}
      </DocumentToolBarButton>
    </DocumentToolBarItem>
  );
};
