import React, { FC, Fragment } from 'react';

interface IProps {}

export const Wrapper: FC<IProps> = ({ children }) => {
  return <Fragment>{children}</Fragment>;
};
