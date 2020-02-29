import React, { FC, useState } from 'react';
import { css } from '@emotion/core';
import Calendar from 'react-calendar/dist/entry.nostyle';
import { FiChevronRight, FiChevronLeft, FiChevronsLeft, FiChevronsRight } from 'react-icons/fi';

interface IProps {}

export const DatePicker: FC<IProps> = () => {
  const [localValue, setLocalValue] = useState(new Date());
  function onChange(e: any) {
    console.log(e);
  }
  return (
    <div css={styles.root}>
      <Calendar
        prev2Label={<FiChevronsLeft />}
        prevLabel={<FiChevronLeft />}
        nextLabel={<FiChevronRight />}
        next2Label={<FiChevronsRight />}
        onChange={onChange}
        value={localValue}
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
