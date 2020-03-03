import React, { FC, useRef, useState } from 'react';
import { EOLocale } from 'eo-locale';
import { EPhrase } from '../../../../locales/EPhrase';
import { DocumentHeaderBarButton } from './DocumentHeaderBarButton';
import { DocumentHeaderBarItem } from './DocumentHeaderBarItem';
import { FiDisc } from 'react-icons/fi';
import { DropdownView } from '../../dropdowns/DropdownView';
import { css } from '@emotion/core';
import { DropdownContextMenu, IDropdownContextMenuItem } from '../../dropdowns/DropdownContextMenu';
import { EDocumentPriority } from '../../../../models/document';
import { getPriorityColor } from '../../../../utils/getPriorityColor';
import { getPriorityText } from '../../../../utils/getPriorityText';

interface IProps {
  onChange: (priority: EDocumentPriority) => void;
  value: EDocumentPriority;
}

const PRIORITIES: EDocumentPriority[] = [
  EDocumentPriority.Default,
  EDocumentPriority.Low,
  EDocumentPriority.Medium,
  EDocumentPriority.High,
];

export const DocumentHeaderBarPriority: FC<IProps> = ({ onChange, value }) => {
  const [localValue, setLocalValue] = useState(value);
  const menuItems: IDropdownContextMenuItem[] = PRIORITIES.map(priority => {
    return {
      title: getPriorityText(priority),
      icon: <FiDisc />,
      color: getPriorityColor(priority),
      selected: priority === localValue,
      onSelect: () => {
        setShowDropdown(false);
        setLocalValue(priority);
        onChange(priority);
      },
    };
  });

  const buttonRef = useRef<HTMLDivElement>(null);
  const [showDropdown, setShowDropdown] = useState(false);
  function toggleDropdown() {
    setShowDropdown(!showDropdown);
  }
  return (
    <DocumentHeaderBarItem label={EPhrase.Document_Priority}>
      <div css={styles.root} ref={buttonRef}>
        <DocumentHeaderBarButton
          colorMode='icon'
          color={getPriorityColor(localValue)}
          icon={<FiDisc />}
          onClick={toggleDropdown}>
          <EOLocale.Text id={getPriorityText(localValue)} />
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
};
