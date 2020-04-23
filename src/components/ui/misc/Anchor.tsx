import React, { FC, LinkHTMLAttributes } from 'react';
import { Link } from '@reach/router';

interface IProps {
  to: string;
}

export const Anchor: FC<IProps> = ({ to, children }) => {
  return (
    <Link to={to} className='text-indigo-600 hover:text-indigo-500'>
      {children}
    </Link>
  );
};
