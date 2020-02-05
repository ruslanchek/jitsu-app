import React, { FC, Fragment } from 'react';

interface IProps {
  date: Date;
}

export const DateFormatter: FC<IProps> = ({ date }) => {
  return (
    <Fragment>
      {date.toLocaleDateString('en', {
        month: 'long',
        year: 'numeric',
        day: 'numeric',
      })}
    </Fragment>
  );
};
