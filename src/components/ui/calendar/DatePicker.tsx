import React, { FC } from 'react';
import { css } from '@emotion/core';
import Calendar from 'react-calendar/dist/entry.nostyle';
import { FiChevronRight, FiChevronLeft, FiChevronsLeft, FiChevronsRight } from 'react-icons/fi';

interface IProps {
  value: Date;
  onChange: (date: Date) => void;
}

export const DatePicker: FC<IProps> = ({ value, onChange }) => {
  return (
    <div css={styles.root}>
      <Calendar
        prev2Label={<FiChevronsLeft />}
        prevLabel={<FiChevronLeft />}
        nextLabel={<FiChevronRight />}
        next2Label={<FiChevronsRight />}
        onChange={value => {
          if (value instanceof Date) {
            onChange(value);
          } else {
            onChange(value[0]);
          }
        }}
        value={value}
      />
    </div>
  );
};

const styles = {
  root: css`
    .react-calendar {
      width: 280px;

      &__navigation {
      }
    }
  `,
};
