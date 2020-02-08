import React, { FC } from 'react';
import { css } from '@emotion/core';
import {
  FaTasks,
  FaRegClone,
  FaRegClock,
  FaRegTimesCircle,
  FaRegCommentDots,
  FaInfo,
  FaTextHeight,
} from 'react-icons/all';
import { COLORS } from '../../../../common/colors';
import { BORDER_RADIUS } from '../../../../common/ui';
import { rgba } from 'polished';
import { EOLocale } from 'eo-locale';
import { EPhrase } from '../../../../locales/EPhrase';

interface IProps {}

export const DocumentSideNav: FC<IProps> = () => {
  return (
    <div css={styles.root}>
      <a css={styles.item} className='active' href='/'>
        <FaInfo css={styles.itemIcon} />
        Info
      </a>
      <a css={styles.item} href='/'>
        <FaTasks css={styles.itemIcon} />
        <EOLocale.Text id={EPhrase.Document_Subtasks} />
      </a>
      <a css={styles.item} href='/'>
        <FaTextHeight css={styles.itemIcon} />
        Description
      </a>
      <a css={styles.item} href='/'>
        <FaRegCommentDots css={styles.itemIcon} />
        Conversation
      </a>
      <a css={styles.item} href='/'>
        <FaRegClock css={styles.itemIcon} />
        Timeline
      </a>
      <a css={styles.item} href='/'>
        <FaRegClone css={styles.itemIcon} />
        Artifacts
      </a>
      <a css={styles.item} className='danger' href='/'>
        <FaRegTimesCircle css={styles.itemIcon} />
        Delete
      </a>
    </div>
  );
};

const styles = {
  root: css`
    display: flex;
    flex-direction: column;
  `,

  item: css`
    padding: 8px 12px;
    border-radius: ${BORDER_RADIUS.MEDIUM};
    transition: color 0.2s, background-color 0.2s;
    display: flex;
    align-items: center;

    &:hover,
    &:active {
      color: ${COLORS.HIGH_SMOKE};
      background-color: ${COLORS.SNOW};
    }

    &:link,
    &:visited {
      color: ${COLORS.SMOKE};
    }

    &.active {
      background-color: ${rgba(COLORS.PURPLE, 0.05)};
      color: ${COLORS.PURPLE};
    }

    &.danger {
      &:hover,
      &:active {
        color: ${COLORS.FIRE_ROSE};
      }
    }
  `,

  itemIcon: css`
    margin-right: 2ex;
    width: 16px;
    height: 16px;
    transform: translateY(-0.5px);
  `,
};