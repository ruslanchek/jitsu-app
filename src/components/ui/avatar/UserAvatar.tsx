import React, { FC } from 'react';
import classnames from 'classnames';

interface IProps {
  size: 'small' | 'medium' | 'large';
}

export const UserAvatar: FC<IProps> = ({ size }) => {
  return (
    <div
      className={classnames('rounded-full overflow-hidden relative bg-gray-100', {
        'w-6 h-6': size === 'small',
        'w-8 h-8': size === 'medium',
        'w-14 h-14': size === 'large',
      })}>
      <img src={`https://i.pravatar.cc/300?a=${Math.random()}`} />
    </div>
  );
};
