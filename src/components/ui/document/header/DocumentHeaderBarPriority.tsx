import React, { FC } from 'react';
import { EOLocale } from 'eo-locale';
import { EPhrase } from '../../../../locales/EPhrase';
import { DocumentHeaderBarButton } from './DocumentHeaderBarButton';
import { COLORS } from '../../../../common/colors';
import { DocumentHeaderBarItem } from './DocumentHeaderBarItem';
import { FaDotCircle } from 'react-icons/fa';

interface IProps {}

export const DocumentHeaderBarPriority: FC<IProps> = () => {
  return (
    <DocumentHeaderBarItem label={EPhrase.Document_Priority}>
      <DocumentHeaderBarButton colorMode='icon' color={COLORS.ORANGE} icon={<FaDotCircle/>}>
        <EOLocale.Text id={EPhrase.Document_priority_Moderate} />
      </DocumentHeaderBarButton>
    </DocumentHeaderBarItem>
  );
};
