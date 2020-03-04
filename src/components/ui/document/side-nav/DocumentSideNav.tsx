import React, { FC } from 'react';
import { css } from '@emotion/core';
import { FiBookOpen, FiMessageSquare, FiRss, FiXSquare, FiUsers } from 'react-icons/fi';
import { COLORS } from '../../../../common/colors';
import { BORDER_RADIUS, DOCUMENT_SIDE_TOOLS } from '../../../../common/ui';
import { EOLocale } from 'eo-locale';
import { EPhrase } from '../../../../locales/EPhrase';
import { Link } from '@reach/router';
import { PATHS } from '../../../../common/paths';

interface IProps {
  projectId: string;
  documentId: string;
}

export const DocumentSideNav: FC<IProps> = ({ projectId, documentId }) => {
  function injectParams(path: string) {
    return path.replace(':projectId', projectId).replace(':documentId', documentId);
  }
  return (
    <div css={styles.root}>
      <Link to={injectParams(PATHS.DOCUMENT_TASK)} css={styles.item}>
        <FiBookOpen css={styles.itemIcon} />
        <EOLocale.Text id={EPhrase.Document_section_Storyboard} />
      </Link>
      <Link to={injectParams(PATHS.DOCUMENT_TASK_CONVERSATION)} css={styles.item}>
        <FiMessageSquare css={styles.itemIcon} />
        <EOLocale.Text id={EPhrase.Document_section_Conversation} />
      </Link>
      <a css={styles.item} href='/'>
        <FiRss css={styles.itemIcon} />
        <EOLocale.Text id={EPhrase.Document_section_Timeline} />
      </a>
      <a css={styles.item} href='/'>
        <FiUsers css={styles.itemIcon} />
        <EOLocale.Text id={EPhrase.Document_section_Members} />
      </a>
      <a css={styles.item} className='danger' href='/'>
        <FiXSquare css={styles.itemIcon} />
        <EOLocale.Text id={EPhrase.Document_section_Delete} />
      </a>
    </div>
  );
};

const styles = {
  root: css`
    display: flex;
    flex-direction: column;
    position: sticky;
    top: ${DOCUMENT_SIDE_TOOLS.STICKY_TOP_POSITION};
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

    &[aria-current] {
      background-color: ${COLORS.DIRTY_SNOW};
      color: ${COLORS.HIGH_SMOKE};
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
