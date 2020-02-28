import React, { FC } from 'react';
import { css } from '@emotion/core';
import { HEADER_ELEMENT_HEIGHT } from '../../../common/ui';
import { hideText } from 'polished';
import { Link } from '@reach/router';
import { PATHS } from '../../../common/paths';

export const HeaderLogo: FC = () => {
  return (
    <Link to={PATHS.MAIN} css={styles.root}>
      Jitsu
    </Link>
  );
};

const styles = {
  root: css`
    background-image: url(${require('../../../assets/images/logos/jitsu-short.svg')});
    background-repeat: no-repeat;
    background-size: 30px;
    background-position: 0 50%;
    width: ${HEADER_ELEMENT_HEIGHT};
    height: ${HEADER_ELEMENT_HEIGHT};
    ${hideText()};
  `,
};
