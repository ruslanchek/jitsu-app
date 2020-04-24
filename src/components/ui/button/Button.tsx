import React, { FC, ButtonHTMLAttributes } from 'react';
import classnames from 'classnames';

interface IProps {
  attrs: ButtonHTMLAttributes<HTMLButtonElement>;
  style?: 'default' | 'faded';
  size?: 'large' | 'small';
}

export const Button: FC<IProps> = ({ attrs, size = 'large', style = 'default', children }) => {
  return (
    <button
      {...attrs}
      className={classnames(
        'w-full flex items-center justify-center border border-transparent text-base leading-6 rounded-md focus:outline-none focus:shadow-outline transition duration-150 ease-in-out',
        {
          'bg-indigo-600 hover:bg-indigo-500 shadow-md text-white': style === 'default',
          'bg-indigo-100 hover:bg-indigo-200 text-indigo-500': style === 'faded',
          'px-8 py-3 font-medium': size === 'large',
          'px-6 h-10 font-base': size === 'small',
        },
      )}>
      {children}
    </button>
  );
};
