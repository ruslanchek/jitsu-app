import React, { FC, Fragment } from 'react';
import { formatDistanceToNow } from 'date-fns';

interface IProps {
  date: Date;
}

export const DateDistance: FC<IProps> = ({ date }) => {
  return (
    <Fragment>
      {formatDistanceToNow(date)}
    </Fragment>
  );
};
