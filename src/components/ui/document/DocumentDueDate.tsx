import React, { FC } from 'react';
import { css } from '@emotion/core';

interface IProps {
  date: Date;
}

export const DocumentDueDate: FC<IProps> = ({date}) => {
  return (<div>
    Due to 20 December 2020
  </div>);
};

const styles = {
  root: css``,
};