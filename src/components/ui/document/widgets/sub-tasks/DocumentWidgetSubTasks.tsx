import React, { FC } from 'react';
import { css } from '@emotion/core';
import { DocumentWidgetSubTaskItem } from './DocumentWidgetSubTaskItem';
import { COLORS } from '../../../../../common/colors';
import { BORDER_RADIUS } from '../../../../../common/ui';
import { EOLocale } from 'eo-locale';
import { EPhrase } from '../../../../../locales/EPhrase';

interface IItem {
  id: string;
  checked: boolean;
  label: string;
}

interface IProps {
  items: IItem[];
}

export const DocumentWidgetSubTasks: FC<IProps> = ({ items }) => {
  return (
    <div css={styles.root}>
      <div css={styles.header}>
        <h2>
          <EOLocale.Text id={EPhrase.Document_Subtasks} />
        </h2>
      </div>
      <div css={styles.content}>
        {items.map(item => (
          <DocumentWidgetSubTaskItem key={item.id} label={item.label} checked={item.checked} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  root: css`
    margin-bottom: 30px;
    background-color: ${COLORS.SNOW};
    border-radius: ${BORDER_RADIUS.MEDIUM};
    border: 1px solid ${BORDER_RADIUS.MEDIUM};
  `,

  header: css`
    padding: 10px 20px;
    background-color: ${COLORS.DIRTY_SNOW};
    border-radius: ${BORDER_RADIUS.MEDIUM} ${BORDER_RADIUS.MEDIUM} 0 0;

    > h2 {
      margin: 0;
      font-weight: 400;
    }
  `,

  content: css`
    padding: 15px 20px;
  `,
};
