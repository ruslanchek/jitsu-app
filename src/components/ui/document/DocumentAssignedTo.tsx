import React, { FC } from 'react';
import { COLORS } from '../../../common/colors';
import { EPhrase } from '../../../locales/EPhrase';
import { DocumentToolBarItem } from './DocumentToolBarItem';
import { DocumentToolBarButton } from './DocumentToolBarButton';

interface IProps {
  user: string;
}

export const DocumentAssignedTo: FC<IProps> = ({ user }) => {
  return (
    <DocumentToolBarItem label={EPhrase.Document_Assigned_to}>
      <DocumentToolBarButton background color={COLORS.HIGH_SMOKE}>
        @{user}
      </DocumentToolBarButton>
    </DocumentToolBarItem>
  );
};
