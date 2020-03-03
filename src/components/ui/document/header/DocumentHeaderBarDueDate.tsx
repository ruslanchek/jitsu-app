import React, { FC, useRef, useState } from 'react';
import { COLORS } from '../../../../common/colors';
import { DateFormatter } from '../../formatters/DateFormatter';
import { EPhrase } from '../../../../locales/EPhrase';
import { DocumentHeaderBarItem } from './DocumentHeaderBarItem';
import { DocumentHeaderBarButton } from './DocumentHeaderBarButton';
import { DropdownView } from '../../dropdowns/DropdownView';
import { css } from '@emotion/core';
import { DatePicker } from '../../calendar/DatePicker';
import { useDateColor } from '../../../../hooks/useDateColor';

interface IProps {
  date: Date;
  onChange: (date: Date) => void;
}

export const DocumentHeaderBarDueDate: FC<IProps> = ({ date, onChange }) => {
  const dateColor = useDateColor(date, COLORS.HIGH_SMOKE);
  const [showDropdown, setShowDropdown] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);
  function toggleDropdown() {
    setShowDropdown(!showDropdown);
  }
  function selectDate(date: Date) {
    setShowDropdown(false);
    onChange(date);
  }
  return (
    <DocumentHeaderBarItem label={EPhrase.Document_Due_to}>
      <div css={styles.root} ref={buttonRef}>
        <DocumentHeaderBarButton color={dateColor} onClick={toggleDropdown}>
          <DateFormatter date={date} />
        </DocumentHeaderBarButton>
        <DropdownView onHide={() => setShowDropdown(false)} forwardRef={buttonRef} show={showDropdown}>
          <DatePicker value={date} onChange={selectDate} />
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
