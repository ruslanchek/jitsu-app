import React, { FC, useRef, useState } from 'react';
import { EOLocale } from 'eo-locale';
import { EPhrase } from '../../../../locales/EPhrase';
import { DocumentHeaderBarButton } from './DocumentHeaderBarButton';
import { COLORS } from '../../../../common/colors';
import { DocumentHeaderBarItem } from './DocumentHeaderBarItem';
import { FaDotCircle } from 'react-icons/fa';
import { DropdownView } from '../../dropdowns/DropdownView';
import { css } from '@emotion/core';
import { DropdownContextMenu, IDropdownContextMenuItem } from '../../dropdowns/DropdownContextMenu';
import { FiBookOpen, FiBox, FiCheckCircle, FiClipboard, FiUserPlus } from 'react-icons/fi';

interface IProps {}

export const DocumentHeaderBarPriority: FC<IProps> = () => {
  const menuItems: IDropdownContextMenuItem[] = [
    {
      title: EPhrase.Create_Task,
      icon: <FaDotCircle />,
      color: COLORS.SMOKE,
      onSelect: () => {
        setShowDropdown(false);
      },
    },
    {
      title: EPhrase.Create_Invite,
      icon: <FaDotCircle />,
      color: COLORS.SMOKE,
      onSelect: () => {
        setShowDropdown(false);
      },
    },
  ];
  const buttonRef = useRef<HTMLDivElement>(null);
  const [showDropdown, setShowDropdown] = useState(false);
  function toggleDropdown() {
    setShowDropdown(!showDropdown);
  }
  return (
    <DocumentHeaderBarItem label={EPhrase.Document_Priority}>
      <div css={styles.root} ref={buttonRef}>
        <DocumentHeaderBarButton colorMode='icon' color={COLORS.ORANGE} icon={<FaDotCircle />} onClick={toggleDropdown}>
          <EOLocale.Text id={EPhrase.Document_priority_Moderate} />
        </DocumentHeaderBarButton>
        <DropdownView onHide={() => setShowDropdown(false)} forwardRef={buttonRef} show={showDropdown}>
          <DropdownContextMenu items={menuItems} />
        </DropdownView>
      </div>
    </DocumentHeaderBarItem>
  );
};

const styles = {
  root: css`
    position: relative;
  `,

  dropdownRoot: css`
    
  `,
};
