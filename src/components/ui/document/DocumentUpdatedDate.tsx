import React, { FC } from 'react';
import { COLORS } from '../../../common/colors';
import { DateFormatter } from '../formatters/DateFormatter';
import { EPhrase } from '../../../locales/EPhrase';
import { DocumentToolBarItem } from './DocumentToolBarItem';
import { css } from '@emotion/core';

interface IProps {
  date: Date;
}

export const DocumentUpdatedDate: FC<IProps> = ({ date }) => {
  return (
    <DocumentToolBarItem label={EPhrase.Document_Updated}>
      <span css={style.root}>
        <DateFormatter date={date} />
      </span>
    </DocumentToolBarItem>
  );
};

const style = {
  root: css`
    color: ${COLORS.HIGH_SMOKE};
  `,
};
