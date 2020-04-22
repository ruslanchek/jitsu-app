import React, { FC } from 'react';

export const H2: FC = ({ children }) => {
  return <h2 className='text-center text-2xl leading-tight font-extrabold text-gray-900'>{children}</h2>;
};
