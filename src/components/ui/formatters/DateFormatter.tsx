import React, { FC, Fragment } from 'react';
import { DEFAULT_LOCALE } from '../../../common/defaults';

interface IProps {
  date: Date;
  time?: boolean;
}

export const DateFormatter: FC<IProps> = ({ date, time }) => {
  return (
    <Fragment>
      {date.toLocaleDateString(DEFAULT_LOCALE, {
        month: 'long',
        year: 'numeric',
        day: 'numeric',
      })}
      {time && ` ${date.toLocaleTimeString(DEFAULT_LOCALE)}`}
    </Fragment>
  );
};
