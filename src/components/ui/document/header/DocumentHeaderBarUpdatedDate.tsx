import React, { FC } from 'react';
import { COLORS } from '../../../../common/colors';
import { DateFormatter } from '../../formatters/DateFormatter';
import { EPhrase } from '../../../../locales/EPhrase';
import { DocumentHeaderBarItem } from './DocumentHeaderBarItem';
import { DocumentHeaderBarButton } from './DocumentHeaderBarButton';
import { css } from '@emotion/core';

interface IProps {
  date: Date;
  user: string;
}

export const DocumentHeaderBarUpdatedDate: FC<IProps> = ({ date, user }) => {
  return (
    <DocumentHeaderBarItem label={EPhrase.Document_Updated}>
      <span css={styles.date}>
        <DateFormatter date={date} />
      </span>
      <DocumentHeaderBarButton background color={COLORS.HIGH_SMOKE}>
        @{user}
      </DocumentHeaderBarButton>
    </DocumentHeaderBarItem>
  );
};

const styles = {
  date: css`
    color: ${COLORS.HIGH_SMOKE};
    margin-right: 1ex;
  `,
};
