import React, { FC } from 'react';
import { RiReactjsLine } from 'react-icons/ri';

interface IProps {}

export const SectionLabel: FC<IProps> = ({ children }) => {
  return <h3 className='text-gray-600 text-xs uppercase'>{children}</h3>;
};
