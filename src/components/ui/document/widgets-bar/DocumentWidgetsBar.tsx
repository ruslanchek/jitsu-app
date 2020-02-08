import React, { FC } from 'react';
import { css } from '@emotion/core';
import { FiCheckCircle, FiCodesandbox, FiFileText, FiImage, FiMap, FiSmile, FiYoutube } from 'react-icons/all';
import { COLORS } from '../../../../common/colors';
import { BORDER_RADIUS } from '../../../../common/ui';
import { DocumentWidgetsBarItem } from './DocumentWidgetsBarItem';

interface IProps {}

export const DocumentWidgetsBar: FC<IProps> = () => {
  return (
    <div css={styles.root}>
      <DocumentWidgetsBarItem icon={<FiFileText />} />
      <DocumentWidgetsBarItem icon={<FiYoutube />} />
      <DocumentWidgetsBarItem icon={<FiMap />} />
      <DocumentWidgetsBarItem icon={<FiSmile />} />
      <DocumentWidgetsBarItem icon={<FiCheckCircle />} />
      <DocumentWidgetsBarItem icon={<FiCodesandbox />} />
      <DocumentWidgetsBarItem icon={<FiImage />} />
    </div>
  );
};

const styles = {
  root: css`
    padding: 10px 0;
    width: 60px;
    box-sizing: border-box;
    border: 1px solid ${COLORS.DIRTY_SNOW};
    border-radius: ${BORDER_RADIUS.MEDIUM};
  `,
};
