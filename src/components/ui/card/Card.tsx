import React, { FC } from 'react';

export const Card: FC = ({ children }) => {
  return <div className='rounded-lg overflow-hidden shadow px-12 py-10 bg-white'>{children}</div>;
};
