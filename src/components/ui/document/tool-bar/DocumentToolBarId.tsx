import React, { FC } from 'react';
import { css } from '@emotion/core';
import { COLORS } from '../../../../common/colors';
import { FiLink } from 'react-icons/fi';
import { DocumentToolBarItem } from './DocumentToolBarItem';
import { useTranslator } from 'eo-locale';
import { EPhrase } from '../../../../locales/EPhrase';

interface IProps {
  id: string;
}

export const DocumentToolBarId: FC<IProps> = ({ id }) => {
  const translator = useTranslator();

  return (
    <DocumentToolBarItem>
      <a href='/' css={styles.root} title={translator.translate(EPhrase.Document_Document_id)}>
        <FiLink className='anchor' size='16px' />#{id}
      </a>
    </DocumentToolBarItem>
  );
};

const styles = {
  root: css`
    color: ${COLORS.SMOKE};
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: color 0.2s;
    position: relative;

    .anchor {
      width: 16px;
      height: 16px;
      margin-right: 6px;
      position: absolute;
      display: block;
      opacity: 0;
      transform: translate(-20px, -1px);
      transition: opacity 0.2s;
      color: ${COLORS.SMOKE};
    }

    &:link,
    &:visited {
      color: ${COLORS.SMOKE};
    }

    &:hover {
      color: ${COLORS.PLATINUM};

      .anchor {
        opacity: 1;
      }
    }
  `,
};
