import React, { FC, LinkHTMLAttributes } from 'react';

interface IProps {
  attrs: LinkHTMLAttributes<HTMLAnchorElement>;
}

export const Anchor: FC<IProps> = ({ attrs, children }) => {
  return (
    <a {...attrs} className='text-indigo-600 hover:text-indigo-500'>
      {children}
    </a>
  );
};
