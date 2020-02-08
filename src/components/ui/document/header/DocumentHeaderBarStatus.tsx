import React, { FC } from 'react';
import { COLORS } from '../../../../common/colors';
import { EPhrase } from '../../../../locales/EPhrase';
import { DocumentHeaderBarItem } from './DocumentHeaderBarItem';
import { FaPlay } from 'react-icons/fa';
import { DocumentHeaderBarButton } from './DocumentHeaderBarButton';
import { EOLocale } from 'eo-locale';

interface IProps {}

export const DocumentHeaderBarStatus: FC<IProps> = () => {
  return (
    <DocumentHeaderBarItem label={EPhrase.Document_Status}>
      <DocumentHeaderBarButton colorMode='icon' color={COLORS.GRASS_GREEN} icon={<FaPlay />}>
        <EOLocale.Text id={EPhrase.Document_status_In_progress} />
      </DocumentHeaderBarButton>
    </DocumentHeaderBarItem>
  );
};
