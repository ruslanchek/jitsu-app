import React, { FC } from 'react';
import { DocumentWidgetSubTaskItem } from './DocumentWidgetSubTaskItem';
import { EOLocale } from 'eo-locale';
import { EPhrase } from '../../../../../locales/EPhrase';
import { css } from '@emotion/core';
import { COLORS } from '../../../../../common/colors';
import { BORDER_RADIUS, DOCUMENT_BUTTON_HEIGHT, FONT_FAMILY, FONT_SIZE } from '../../../../../common/ui';
import { rgba } from 'polished';
import { DocumentWidgetHeader } from '../elements/DocumentWidgetHeader';

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
      <DocumentWidgetHeader>
        <h3>
          Subtasks
        </h3>
      </DocumentWidgetHeader>
      <section css={styles.content}>
        {items.map(item => (
          <DocumentWidgetSubTaskItem key={item.id} label={item.label} checked={item.checked} />
        ))}
      </section>
    </div>
  );
};

const styles = {
  root: css`
    background-color: ${COLORS.SNOW};
    border-radius: ${BORDER_RADIUS.MEDIUM};
    border: 1px solid ${BORDER_RADIUS.MEDIUM};
  `,

  header: css`
    padding: 9px 20px 8px;
    background-color: ${COLORS.DIRTY_SNOW};
    border-radius: ${BORDER_RADIUS.MEDIUM} ${BORDER_RADIUS.MEDIUM} 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  actions: css`
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  `,

  actionButton: css`
    height: ${DOCUMENT_BUTTON_HEIGHT};
    display: flex;
    padding: 0 6px;
    align-items: center;
    box-sizing: border-box;
    border-radius: ${BORDER_RADIUS.SMALL};
    background-color: ${rgba(COLORS.SMOKE, 0.2)};
    color: ${COLORS.HIGH_SMOKE};
    border: none;
    margin-right: 1ex;
    cursor: pointer;
    font-family: ${FONT_FAMILY};
    font-size: ${FONT_SIZE.SMALL};
    transition: background-color 0.2s, color 0.2s;

    &:last-of-type {
      margin-right: 0;
    }

    &:hover {
      background-color: ${rgba(COLORS.SMOKE, 0.4)};
      color: ${COLORS.PLATINUM};
    }
  `,

  content: css`
    padding: 15px 20px;
  `,
};
