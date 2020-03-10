import React, { FC, useRef, useState } from 'react';
import { EOLocale } from 'eo-locale';
import { EPhrase } from '../../../../locales/EPhrase';
import { DocumentHeaderBarButton } from './DocumentHeaderBarButton';
import { DocumentHeaderBarItem } from './DocumentHeaderBarItem';
import { DropdownView } from '../../dropdowns/DropdownView';
import { css } from '@emotion/core';
import { DropdownContextMenu, IDropdownContextMenuItem } from '../../dropdowns/DropdownContextMenu';
import { EDocumentPriority } from '../../../../models/document';
import { getPriorityColor } from '../../../../utils/getPriorityColor';
import { getPriorityText } from '../../../../utils/getPriorityText';
import { DocumentPriorityIcon } from '../priority/DocumentPriorityIcon';

interface IProps {
  onChange: (priority: EDocumentPriority) => void;
  value: EDocumentPriority;
}

const PRIORITIES: EDocumentPriority[] = [
  EDocumentPriority.High,
  EDocumentPriority.Medium,
  EDocumentPriority.Low,
  EDocumentPriority.Default,
];

export const DocumentHeaderBarPriority: FC<IProps> = ({ onChange, value }) => {
  const [localValue, setLocalValue] = useState(value);
  const menuItems: IDropdownContextMenuItem[] = PRIORITIES.map(priority => {
    return {
      title: getPriorityText(priority),
      icon: <DocumentPriorityIcon priority={priority} />,
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
          icon={<DocumentPriorityIcon priority={localValue} />}
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
