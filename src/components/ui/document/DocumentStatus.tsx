import React, { FC } from 'react';
import { COLORS } from '../../../common/colors';
import { EPhrase } from '../../../locales/EPhrase';
import { DocumentToolBarItem } from './DocumentToolBarItem';
import { FaPlay } from 'react-icons/fa';
import { DocumentToolBarButton } from './DocumentToolBarButton';
import { css } from '@emotion/core';
import {EOLocale} from 'eo-locale';

interface IProps {}

export const DocumentStatus: FC<IProps> = () => {
  return (
    <DocumentToolBarItem label={EPhrase.Document_Status}>
      <DocumentToolBarButton color={COLORS.GRASS_GREEN}>
        <FaPlay css={styles.icon} /> <EOLocale.Text id={EPhrase.Document_status_In_progress}/>
      </DocumentToolBarButton>
    </DocumentToolBarItem>
  );
};

const styles = {
  icon: css`
    margin-right: .5ex;
    width: 12px;
    height: 12px;
  `,
};
