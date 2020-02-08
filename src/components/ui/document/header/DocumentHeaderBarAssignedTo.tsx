import React, { FC } from 'react';
import { COLORS } from '../../../../common/colors';
import { EPhrase } from '../../../../locales/EPhrase';
import { DocumentHeaderBarItem } from './DocumentHeaderBarItem';
import { DocumentHeaderBarButton } from './DocumentHeaderBarButton';

interface IProps {
  user: string;
}

export const DocumentHeaderBarAssignedTo: FC<IProps> = ({ user }) => {
  return (
    <DocumentHeaderBarItem label={EPhrase.Document_Assigned_to}>
      <DocumentHeaderBarButton background color={COLORS.HIGH_SMOKE}>
        @{user}
      </DocumentHeaderBarButton>
    </DocumentHeaderBarItem>
  );
};
