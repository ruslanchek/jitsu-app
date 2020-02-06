import React, { FC } from 'react';
import { COLORS } from '../../../../common/colors';
import { EPhrase } from '../../../../locales/EPhrase';
import { DocumentToolBarItem } from './DocumentToolBarItem';
import { FaPlay } from 'react-icons/fa';
import { DocumentToolBarButton } from './DocumentToolBarButton';
import { EOLocale } from 'eo-locale';

interface IProps {}

export const DocumentToolBarStatus: FC<IProps> = () => {
  return (
    <DocumentToolBarItem label={EPhrase.Document_Status}>
      <DocumentToolBarButton colorMode='icon' color={COLORS.GRASS_GREEN} icon={<FaPlay />}>
        <EOLocale.Text id={EPhrase.Document_status_In_progress} />
      </DocumentToolBarButton>
    </DocumentToolBarItem>
  );
};
