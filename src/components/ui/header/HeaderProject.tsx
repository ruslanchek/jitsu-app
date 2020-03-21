import React, { FC, useRef, useState } from 'react';
import { css } from '@emotion/core';
import { BORDER_RADIUS, FONT_FAMILY, FONT_SIZE, HEADER_ELEMENT_HEIGHT } from '../../../common/ui';
import { COLORS } from '../../../common/colors';
import { FiChevronDown } from 'react-icons/all';
import { useCurrentProject } from '../../../hooks/useCurrentProject';
import Img from 'react-image';
import { DropdownContextMenu, IDropdownContextMenuItem } from '../dropdowns/DropdownContextMenu';
import { useProjects } from '../../../hooks/useProjects';
import { useNavigate } from '@reach/router';
import { PATHS } from '../../../common/paths';
import { DropdownView } from '../dropdowns/DropdownView';

interface IProps {}

export const HeaderProject: FC<IProps> = () => {
  const { currentProject } = useCurrentProject();
  const navigate = useNavigate();
  const { projects } = useProjects();
  const [showDropdown, setShowDropdown] = useState(false);
  const rootRef = useRef(null);
  const menuItems: IDropdownContextMenuItem[] = projects.map(project => {
    return {
      title: project.name,
      icon: <Img css={styles.icon} src={project.avatar.map(a => a.url)} />,
      color: COLORS.SMOKE,
      selected: currentProject && project.id === currentProject.id,
      onSelect: async () => {
        await navigate(PATHS.PROJECT_TASKS.replace(':projectId', project.id));
      },
    };
  });
  function handleButtonClick() {
    setShowDropdown(!showDropdown);
  }
  if (currentProject) {
    return (
      <div ref={rootRef} css={styles.root}>
        <button css={styles.button} onClick={handleButtonClick}>
          <Img css={styles.icon} src={currentProject.avatar.map(a => a.url)} />
          {currentProject.name}
          <FiChevronDown css={styles.chevron} />
          <DropdownView onHide={() => setShowDropdown(false)} show={showDropdown} forwardRef={rootRef}>
            <DropdownContextMenu items={menuItems} />
          </DropdownView>
        </button>
      </div>
    );
  }

  return null;
};

const styles = {
  root: css`
    margin-left: 20px;
    margin-right: 20px;
    position: relative;
  `,

  button: css`
    display: flex;
    align-items: center;
    height: ${HEADER_ELEMENT_HEIGHT};
    color: ${COLORS.HIGH_SMOKE};
    border: 1px solid ${COLORS.DIRTY_SNOW};
    border-radius: ${BORDER_RADIUS.MEDIUM};
    box-sizing: border-box;
    white-space: nowrap;
    background: none;
    padding: 0 6px;
    font-family: ${FONT_FAMILY};
    font-size: ${FONT_SIZE.REGULAR};
    cursor: pointer;
    transition: background-color 0.2s, transform 0.2s;

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
    display: block;
    object-fit: contain;
    margin-right: 1ex;
    border-radius: 4px;
  `,

  chevron: css`
    width: 22px;
    height: 22px;
    margin-left: 5px;
    position: relative;
    top: 1px;
    color: ${COLORS.SMOKE};
  `,
};
