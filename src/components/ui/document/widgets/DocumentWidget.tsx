import React, { FC, ReactNode } from 'react';
import { css } from '@emotion/core';
import { COLORS } from '../../../../common/colors';
import { BORDER_RADIUS, FONT_SIZE, DOCUMENT_BUTTON_HEIGHT, FONT_FAMILY } from '../../../../common/ui';
import { rgba } from 'polished';

interface IAction {
  content: ReactNode;
  onClick: () => void;
}

interface IProps {
  title: ReactNode;
  actions?: IAction[];
}

export const DocumentWidget: FC<IProps> = ({ children, actions = [], title }) => {
  return (
    <div css={styles.root}>
      <header css={styles.header}>
        <div css={styles.title}>{title}</div>
        {actions.length > 0 && (
          <div css={styles.actions}>
            {actions.map((action, index) => (
              <button css={styles.actionButton} key={index} onClick={() => action.onClick()}>
                {action.content}
              </button>
            ))}
          </div>
        )}
      </header>
      <section css={styles.content}>{children}</section>
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

  title: css`
    margin: 0;
    font-weight: 400;
    font-size: ${FONT_SIZE.H3};
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
