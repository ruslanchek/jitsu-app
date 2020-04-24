import React, { FC } from 'react';

export const H2: FC = ({ children }) => {
  return <h2 className='text-3xl leading-tight font-bold text-gray-800'>{children}</h2>;
};
