import React, { FC } from 'react';
import { HeaderButton } from './HeaderButton';

interface IProps {}

export const HeaderUser: FC<IProps> = () => {
  return (
    <HeaderButton>
      @m_brtn
    </HeaderButton>
  );
};
