import React, { FC } from 'react';
import classnames from 'classnames';

type TType = 'input' | 'button' | 'text';

interface IProps {
  type?: TType;
}

export const FormRow: FC<IProps> = ({ type = 'input', children }) => {
  return (
    <div
      className={classnames({
        'mt-4': type === 'input',
        'mt-8': type === 'button',
        'text-center text-sm mt-6 text-gray-600': type === 'text',
      })}>
      {children}
    </div>
  );
};
