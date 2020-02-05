import React, { FC } from 'react';
import { css } from '@emotion/core';
import { EOLocale } from 'eo-locale';
import { EPhrase } from '../../../locales/EPhrase';
import { DocumentToolBarButton } from './DocumentToolBarButton';
import { COLORS } from '../../../common/colors';
import { DocumentToolBarItem } from './DocumentToolBarItem';

interface IProps {}

export const DocumentPriority: FC<IProps> = () => {
  return (
    <DocumentToolBarItem label={EPhrase.Document_Priority}>
      <DocumentToolBarButton color={COLORS.ORANGE}>
        <EOLocale.Text id={EPhrase.Document_priority_Moderate} />
      </DocumentToolBarButton>
    </DocumentToolBarItem>
  );
};

const styles = {
  root: css``,
};
