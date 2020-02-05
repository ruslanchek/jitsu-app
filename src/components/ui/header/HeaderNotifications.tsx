import React, { FC } from 'react';
import { FiActivity } from 'react-icons/all';
import { HeaderButton } from './HeaderButton';

export const HeaderNotifications: FC = () => {
  return (
    <HeaderButton alert squared>
      <FiActivity size={20} />
    </HeaderButton>
  );
};

