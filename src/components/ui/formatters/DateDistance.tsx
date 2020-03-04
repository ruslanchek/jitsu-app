import React, { FC, Fragment, useEffect, useState } from 'react';
import { formatDistanceToNow } from 'date-fns';

interface IProps {
  date: Date;
}

const UPDATE_INTERVAL = 30000;

export const DateDistance: FC<IProps> = ({ date }) => {
  const [_, setTs] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTs(Date.now());
    }, UPDATE_INTERVAL);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <Fragment>{formatDistanceToNow(date)}</Fragment>;
};
