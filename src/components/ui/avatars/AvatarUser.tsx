import { css } from '@emotion/core';
import React, { useState } from 'react';
import { COLORS } from '../../../common/colors';
import classNames from 'classnames';

interface IProps {
  src: string;
  title: string;
  size: number;
}

export const AvatarUser: React.FC<IProps> = ({ src, title, size }) => {
  const [loading, setLoading] = useState(true);

  function onLoad() {
    setLoading(false);
  }

  return (
    <div css={styles.root} className={classNames({ loading })}>
      <img onLoad={onLoad} src={src} title={title} alt={title} width={size} height={size} />
    </div>
  );
};

const styles = {
  root: css`
    border-radius: 50%;
    background-color: ${COLORS.CARBON};

    > img {
      display: block;
      border-radius: 50%;
      transition: transform .2s, opacity .2s;
    }

    &.loading {
      > img {
        opacity: 0;
        transform: scale(0.9);
      }
    }
  `,
};
