import React, { FC } from 'react';
import { css } from '@emotion/core';
import { EOLocale } from 'eo-locale';
import { EPhrase } from '../../../locales/EPhrase';

interface IProps {}

export const DocumentTimeline: FC<IProps> = () => {
  return (
    <div css={styles.root}>
      <h2>
        <EOLocale.Text id={EPhrase.Document_Timeline} />
      </h2>
    </div>
  );
};

const styles = {
  root: css``,
};
