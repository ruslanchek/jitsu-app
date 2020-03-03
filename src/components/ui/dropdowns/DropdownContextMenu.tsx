import React, { FC, ReactNode } from 'react';
import { css } from '@emotion/core';
import { EOLocale } from 'eo-locale';
import { HEADER_ELEMENT_HEIGHT } from '../../../common/ui';
import { COLORS } from '../../../common/colors';

export interface IDropdownContextMenuItem {
  title: string;
  icon: ReactNode;
  color: string;
  onSelect: () => void;
}

interface IProps {
  items: IDropdownContextMenuItem[];
}

export const DropdownContextMenu: FC<IProps> = ({ items }) => {
  return (
    <div css={styles.root}>
      {items.map(item => (
        <div key={item.title} css={styles.item} onClick={item.onSelect}>
          <div css={styles.icon} style={{ color: item.color }}>
            {item.icon}
          </div>
          <EOLocale.Text id={item.title} />
        </div>
      ))}
    </div>
  );
};

const styles = {
  root: css`
    padding: 5px 0;
    user-select: none;
  `,

  item: css`
    padding: 0 15px;
    height: ${HEADER_ELEMENT_HEIGHT};
    cursor: pointer;
    display: flex;
    align-items: center;
    color: ${COLORS.SMOKE};

    &:hover {
      background-color: ${COLORS.SNOW};
      color: ${COLORS.HIGH_SMOKE};
    }
  `,

  icon: css`
    height: ${HEADER_ELEMENT_HEIGHT};
    display: flex;
    align-items: center;
    margin-right: 15px;
  `,
};
