import React, { FC } from 'react';
interface IProps {}

export const ScreenLayout: FC<IProps> = ({ children }) => {
  return <main>{children}</main>;
};
