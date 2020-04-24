import React, { FC } from 'react';
import classnames from 'classnames';

interface IProps {
  size: 'small' | 'medium' | 'large';
}

export const UserAvatar: FC<IProps> = ({ size }) => {
  return (
    <div
      className={classnames('rounded-full overflow-hidden relative bg-gray-200', {
        'w-6 h-6': size === 'small',
        'w-10 h-10': size === 'medium',
        'w-14 h-14': size === 'large',
      })}>
      <img src='https://i.pravatar.cc/300' />
    </div>
  );
};
