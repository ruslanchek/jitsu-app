import React, { FC, useState } from 'react';
import { css } from '@emotion/core';
import Calendar from 'react-calendar';

interface IProps {}

export const DatePicker: FC<IProps> = () => {
  const [localValue, setLocalValue] = useState(new Date());
  function onChange(e: any) {
    console.log(e);
  }
  return (
    <div css={styles.root}>
      <Calendar onChange={onChange} value={localValue} />
    </div>
  );
};

const styles = {
  root: css``,
};
