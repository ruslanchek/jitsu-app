import React, { FC } from 'react';
import { css } from '@emotion/core';
import { BORDER_RADIUS, FONT_FAMILY, FONT_SIZE, HEADER_ELEMENT_HEIGHT } from '../../../common/ui';
import { COLORS } from '../../../common/colors';
import { FiChevronDown } from 'react-icons/all';
import { useCurrentProject } from '../../../hooks/useCurrentProject';
import Img from 'react-image';

interface IProps {}

export const HeaderProject: FC<IProps> = () => {
  const {currentProject} = useCurrentProject();

  if(currentProject) {
    return (
      <button css={styles.root}>
        <Img css={styles.icon} src={currentProject.avatar.map(a => a.url)}/>
        {currentProject.name}
        <FiChevronDown css={styles.chevron}/>
      </button>
    );
  }

  return null;
};

const styles = {
  root: css`
    display: flex;
    align-items: center;
    height: ${HEADER_ELEMENT_HEIGHT};
    color: ${COLORS.HIGH_SMOKE};
    border: 1px solid ${COLORS.DIRTY_SNOW};
    border-radius: ${BORDER_RADIUS.MEDIUM};
    box-sizing: border-box;
    white-space: nowrap;
    background: none;
    padding: 0 8px 0 10px;
    margin-left: 20px;
    font-family: ${FONT_FAMILY};
    font-size: ${FONT_SIZE.REGULAR};
    cursor: pointer;
    transition: background-color 0.2s, transform 0.2s;
    margin-right: 20px;

    &:hover,
    &:focus {
      background-color: ${COLORS.DIRTY_SNOW};
    }

    &:active {
      transform: scale(0.98);
    }
  `,

  icon: css`
    width: 24px;
    height: 24px;
    object-fit: contain;
    margin-right: 1ex;
    border-radius: 4px;
  `,

  chevron: css`
    width: 22px;
    height: 22px;
    margin-left: 5px;
    position:relative;
    top: 1px;
    color: ${COLORS.SMOKE};
  `
};
