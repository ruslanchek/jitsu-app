import React, { FC, useContext, useRef, useState } from 'react';
import { css } from '@emotion/core';
import { FiBookOpen, FiBox, FiCheckCircle, FiClipboard, FiLoader, FiUserPlus } from 'react-icons/fi';
import { COLORS } from '../../../common/colors';
import { BORDER_RADIUS, FONT_FAMILY, FONT_SIZE, HEADER_ELEMENT_HEIGHT } from '../../../common/ui';
import { EPhrase } from '../../../locales/EPhrase';
import { useTranslator } from 'eo-locale';
import { darken, rgba } from 'polished';
import { DropdownView } from '../dropdowns/DropdownView';
import { useOnClickOutside } from '../../../hooks/useOnClickOutside';
import { ModalsContext } from '../modals/Modals';
import { DropdownContextMenu, IDropdownContextMenuItem } from '../dropdowns/DropdownContextMenu';
import { AddTaskModal } from '../../modals/AddTaskModal';

interface IProps {}

export const HeaderAdd: FC<IProps> = () => {
  const modalContext = useContext(ModalsContext);
  const menuItems: IDropdownContextMenuItem[] = [
    {
      title: EPhrase.Add_Task,
      icon: <FiCheckCircle />,
      color: COLORS.SMOKE,
      onSelect: () => {
        console.log('xxx');
        modalContext.openModal({
          renderModalComponent: id => <AddTaskModal handleClose={() => modalContext.closeModal(id)} />,
          showOverlay: true,
          closeByOutsideClick: true,
          closeByEscapeKey: true,
          closeByEnterKey: true,
        });
      },
    },
    {
      title: EPhrase.Add_Document,
      icon: <FiClipboard />,
      color: COLORS.SMOKE,
      onSelect: () => {},
    },
    {
      title: EPhrase.Add_Story,
      icon: <FiBookOpen />,
      color: COLORS.SMOKE,
      onSelect: () => {},
    },
    {
      title: EPhrase.Add_Project,
      icon: <FiBox />,
      color: COLORS.SMOKE,
      onSelect: () => {},
    },
    {
      title: EPhrase.Add_Invite,
      icon: <FiUserPlus />,
      color: COLORS.SMOKE,
      onSelect: () => {},
    },
  ];
  const translator = useTranslator();
  const rootRef = useRef(null);
  const [showDropdown, setShowDropdown] = useState(false);
  function handleButtonClick() {
    setShowDropdown(!showDropdown);
  }
  useOnClickOutside(rootRef, () => setShowDropdown(false));
  return (
    <div css={styles.root} ref={rootRef}>
      <button css={styles.button} title={translator.translate(EPhrase.Actions_Create)} onClick={handleButtonClick}>
        <FiLoader className='icon' size='20px' />
      </button>
      <DropdownView show={showDropdown}>
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
