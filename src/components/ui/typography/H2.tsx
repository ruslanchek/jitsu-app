import React, { FC } from 'react';

export const H2: FC = ({ children }) => {
  return <h2 className='text-center text-3xl leading-tight font-bold text-gray-900'>{children}</h2>;
};
