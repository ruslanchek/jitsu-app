import React, { FC, ReactNode, useRef, useState } from 'react';
import { css } from '@emotion/core';
import { FiBookOpen, FiBox, FiCheckCircle, FiClipboard, FiLoader, FiUserPlus } from 'react-icons/fi';
import { COLORS } from '../../../common/colors';
import { BORDER_RADIUS, FONT_FAMILY, FONT_SIZE, HEADER_ELEMENT_HEIGHT } from '../../../common/ui';
import { EPhrase } from '../../../locales/EPhrase';
import { useTranslator } from 'eo-locale';
import { darken, rgba } from 'polished';
import { DropdownView } from '../common/DropdownView';
import { useOnClickOutside } from '../../../hooks/useOnClickOutside';
import { EOLocale } from 'eo-locale';

interface IAddMenu {
  title: string;
  icon: ReactNode;
}

interface IProps {}

const ADD_MENU: IAddMenu[] = [
  { title: EPhrase.Add_Task, icon: <FiCheckCircle /> },
  { title: EPhrase.Add_Document, icon: <FiBox /> },
  { title: EPhrase.Add_Story, icon: <FiBookOpen /> },
  { title: EPhrase.Add_Project, icon: <FiClipboard /> },
  { title: EPhrase.Add_Invite, icon: <FiUserPlus /> },
];

export const HeaderAdd: FC<IProps> = () => {
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
      <DropdownView show={showDropdown} onHide={() => setShowDropdown(false)}>
        <div css={styles.addRoot}>
          {ADD_MENU.map(item => (
            <div key={item.title} css={styles.addItem}>
              <div css={styles.addIcon}>{item.icon}</div>
              <EOLocale.Text id={item.title} />
            </div>
          ))}
        </div>
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

  addRoot: css`
    padding: 5px 0;
  `,

  addItem: css`
    padding: 0 15px;
    height: ${HEADER_ELEMENT_HEIGHT};
    cursor: pointer;
    display: flex;
    align-items: center;
    color: ${COLORS.SMOKE};

    &:hover {
      background-color: ${COLORS.SNOW.toString()};
      color: ${COLORS.HIGH_SMOKE};
    }
  `,

  addIcon: css`
    height: ${HEADER_ELEMENT_HEIGHT};
    display: flex;
    align-items: center;
    margin-right: 15px;
  `,
};
