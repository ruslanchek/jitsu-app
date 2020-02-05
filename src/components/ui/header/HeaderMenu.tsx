import React, { FC } from 'react';
import { FiMenu } from 'react-icons/all';
import { HeaderButton } from './HeaderButton';

export const HeaderMenu: FC = () => {
  return (
    <HeaderButton squared>
      <FiMenu size={24} />
    </HeaderButton>
  );
};
