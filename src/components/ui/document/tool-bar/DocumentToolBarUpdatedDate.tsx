import React, { FC } from 'react';
import { COLORS } from '../../../../common/colors';
import { DateFormatter } from '../../formatters/DateFormatter';
import { EPhrase } from '../../../../locales/EPhrase';
import { DocumentToolBarItem } from './DocumentToolBarItem';
import { DocumentToolBarButton } from './DocumentToolBarButton';
import { css } from '@emotion/core';

interface IProps {
  date: Date;
  user: string;
}

export const DocumentToolBarUpdatedDate: FC<IProps> = ({ date, user }) => {
  return (
    <DocumentToolBarItem label={EPhrase.Document_Updated}>
      <span css={styles.date}>
        <DateFormatter date={date} />
      </span>
      <DocumentToolBarButton background color={COLORS.HIGH_SMOKE}>
        @{user}
      </DocumentToolBarButton>
    </DocumentToolBarItem>
  );
};

const styles = {
  date: css`
    color: ${COLORS.HIGH_SMOKE};
    margin-right: 1ex;
  `,
};
