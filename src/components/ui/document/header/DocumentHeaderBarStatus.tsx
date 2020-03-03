import React, { FC, useRef, useState } from 'react';
import { COLORS } from '../../../../common/colors';
import { EPhrase } from '../../../../locales/EPhrase';
import { DocumentHeaderBarItem } from './DocumentHeaderBarItem';
import { FaDotCircle, FaPlay } from 'react-icons/fa';
import { DocumentHeaderBarButton } from './DocumentHeaderBarButton';
import { EOLocale } from 'eo-locale';
import { EDocumentStatus } from '../../../../models/document';
import { DropdownContextMenu, IDropdownContextMenuItem } from '../../dropdowns/DropdownContextMenu';
import { getPriorityColor } from '../../../../utils/getPriorityColor';
import { getStatusText } from '../../../../utils/getStatusText';
import { getStatusColor } from '../../../../utils/getStatusColor';
import { DropdownView } from '../../dropdowns/DropdownView';
import { css } from '@emotion/core';
import { DocumentStatusIcon } from '../status/DocumentStatusIcon';

interface IProps {
  onChange: (priority: EDocumentStatus) => void;
  value: EDocumentStatus;
}

const STATUSES: EDocumentStatus[] = [
  EDocumentStatus.InProgress,
  EDocumentStatus.Completed,
  EDocumentStatus.Paused,
  EDocumentStatus.Idle,
  EDocumentStatus.Archived,
];

export const DocumentHeaderBarStatus: FC<IProps> = ({ onChange, value }) => {
  const [localValue, setLocalValue] = useState(value);
  const menuItems: IDropdownContextMenuItem[] = STATUSES.map(status => {
    return {
      title: getStatusText(status),
      icon: <DocumentStatusIcon status={status}/>,
      color: getStatusColor(status),
      selected: status === localValue,
      onSelect: () => {
        setShowDropdown(false);
        setLocalValue(status);
        onChange(status);
      },
    };
  });
  const buttonRef = useRef<HTMLDivElement>(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const statusColor = getStatusColor(localValue);
  function toggleDropdown() {
    setShowDropdown(!showDropdown);
  }

  return (
    <DocumentHeaderBarItem label={EPhrase.Document_Status}>
      <div css={styles.root} ref={buttonRef}>
        <DocumentHeaderBarButton
          colorMode='icon'
          color={statusColor}
          icon={<DocumentStatusIcon status={localValue} />}
          onClick={toggleDropdown}>
          <EOLocale.Text id={getStatusText(localValue)} />
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
