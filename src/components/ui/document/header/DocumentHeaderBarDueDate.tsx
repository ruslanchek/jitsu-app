import React, { FC } from 'react';
import { COLORS } from '../../../../common/colors';
import { DateFormatter } from '../../formatters/DateFormatter';
import { EPhrase } from '../../../../locales/EPhrase';
import { DocumentHeaderBarItem } from './DocumentHeaderBarItem';
import { DocumentHeaderBarButton } from './DocumentHeaderBarButton';

interface IProps {
  date: Date;
}

export const DocumentHeaderBarDueDate: FC<IProps> = ({ date }) => {
  return (
    <DocumentHeaderBarItem label={EPhrase.Document_Due_to}>
      <DocumentHeaderBarButton color={COLORS.FIRE_ROSE}>
        <DateFormatter date={date} />
      </DocumentHeaderBarButton>
    </DocumentHeaderBarItem>
  );
};
