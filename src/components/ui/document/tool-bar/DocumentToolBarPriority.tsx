import React, { FC } from 'react';
import { EOLocale } from 'eo-locale';
import { EPhrase } from '../../../../locales/EPhrase';
import { DocumentToolBarButton } from './DocumentToolBarButton';
import { COLORS } from '../../../../common/colors';
import { DocumentToolBarItem } from './DocumentToolBarItem';
import { FaDotCircle } from 'react-icons/fa';

interface IProps {}

export const DocumentToolBarPriority: FC<IProps> = () => {
  return (
    <DocumentToolBarItem label={EPhrase.Document_Priority}>
      <DocumentToolBarButton colorMode='icon' color={COLORS.ORANGE} icon={<FaDotCircle/>}>
        <EOLocale.Text id={EPhrase.Document_priority_Moderate} />
      </DocumentToolBarButton>
    </DocumentToolBarItem>
  );
};
