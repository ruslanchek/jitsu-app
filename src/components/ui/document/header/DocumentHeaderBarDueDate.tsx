import React, { FC, useRef, useState } from 'react';
import { COLORS } from '../../../../common/colors';
import { DateFormatter } from '../../formatters/DateFormatter';
import { EPhrase } from '../../../../locales/EPhrase';
import { DocumentHeaderBarItem } from './DocumentHeaderBarItem';
import { DocumentHeaderBarButton } from './DocumentHeaderBarButton';
import { DropdownView } from '../../dropdowns/DropdownView';
import { css } from '@emotion/core';
import { DatePicker } from '../../calendar/DatePicker';

interface IProps {
  date: Date;
}

export const DocumentHeaderBarDueDate: FC<IProps> = ({ date }) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);
  function toggleCalendar() {
    setShowCalendar(!showCalendar);
  }
  return (
    <DocumentHeaderBarItem label={EPhrase.Document_Due_to}>
      <div css={styles.root} ref={buttonRef}>
        <DocumentHeaderBarButton color={COLORS.FIRE_ROSE} onClick={toggleCalendar}>
          <DateFormatter date={date} />
        </DocumentHeaderBarButton>
        <DropdownView onHide={() => setShowCalendar(false)} forwardRef={buttonRef} show={showCalendar}>
          <DatePicker />
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
