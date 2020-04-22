import React, { LabelHTMLAttributes, FC } from 'react';

interface IProps {
  attrs: LabelHTMLAttributes<HTMLLabelElement>;
}

export const FormLabel: FC<IProps> = ({ children, attrs }) => {
  return (
    <label {...attrs} className='text-sm text-gray-600 opacity-75 mb-1 flex'>
      {children}
    </label>
  );
};
