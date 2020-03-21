import React, { FC, useRef, useState } from 'react';
import { css } from '@emotion/core';
import { FiBookOpen, FiBox, FiCheckCircle, FiClipboard, FiLoader, FiUserPlus } from 'react-icons/fi';
import { COLORS } from '../../../common/colors';
import {
  BORDER_RADIUS,
  FONT_FAMILY,
  FONT_SIZE,
  HEADER_ELEMENT_HEIGHT,
} from '../../../common/ui';
import { EPhrase } from '../../../locales/EPhrase';
import { useTranslator } from 'eo-locale';
import { darken, rgba } from 'polished';
import { DropdownView } from '../dropdowns/DropdownView';
import { DropdownContextMenu, IDropdownContextMenuItem } from '../dropdowns/DropdownContextMenu';
import { CreateTaskModal } from '../../modals/CreateTaskModal';
import { CreateProjectModal } from '../../modals/CreateProjectModal';
import { useModal } from '../../../hooks/useModal';

interface IProps {}

export const HeaderCreate: FC<IProps> = () => {
  const createTaskModal = useModal(props => <CreateTaskModal {...props} />);
  const createProjectModal = useModal(props => <CreateProjectModal {...props} />);
  const menuItems: IDropdownContextMenuItem[] = [
    {
      title: EPhrase.Create_Task,
      icon: <FiCheckCircle />,
      color: COLORS.SMOKE,
      onSelect: () => {
        setShowDropdown(false);
        createTaskModal.open();
      },
    },
    {
      title: EPhrase.Create_Document,
      icon: <FiClipboard />,
      color: COLORS.SMOKE,
      onSelect: () => {
        setShowDropdown(false);
      },
    },
    {
      title: EPhrase.Create_Story,
      icon: <FiBookOpen />,
      color: COLORS.SMOKE,
      onSelect: () => {
        setShowDropdown(false);
      },
    },
    {
      title: EPhrase.Create_Project,
      icon: <FiBox />,
      color: COLORS.SMOKE,
      onSelect: () => {
        setShowDropdown(false);
        createProjectModal.open();
      },
    },
    {
      title: EPhrase.Create_Invite,
      icon: <FiUserPlus />,
      color: COLORS.SMOKE,
      onSelect: () => {
        setShowDropdown(false);
      },
    },
  ];
  const translator = useTranslator();
  const rootRef = useRef(null);
  const [showDropdown, setShowDropdown] = useState(false);
  function handleButtonClick() {
    setShowDropdown(!showDropdown);
  }
  return (
    <div css={styles.root} ref={rootRef}>
      <button css={styles.button} title={translator.translate(EPhrase.Actions_Create)} onClick={handleButtonClick}>
        <FiLoader className='icon' size='20px' />
      </button>
      <DropdownView onHide={() => setShowDropdown(false)} show={showDropdown} forwardRef={rootRef}>
        <DropdownContextMenu items={menuItems} />
      </DropdownView>
    </div>
  );
};

const styles = {
  root: css`
    position: relative;
    margin-left: 20px;
  `,

  button: css`
    background-color: ${rgba(COLORS.PURPLE, 0.1)};
    height: ${HEADER_ELEMENT_HEIGHT};
    border: none;
    padding: 0 10px;
    border-radius: ${BORDER_RADIUS.MEDIUM};
    color: ${COLORS.PURPLE};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: background-color 0.2s, transform 0.2s, color 0.2s;
    outline: none;
    text-transform: uppercase;
    font-family: ${FONT_FAMILY};
    font-size: ${FONT_SIZE.REGULAR};

    &:focus,
    &:hover {
      background-color: ${rgba(COLORS.PURPLE, 0.2)};
      color: ${darken(0.1, COLORS.PURPLE)};
    }

    &:active {
      transform: scale(0.98);
    }
  `,
};
