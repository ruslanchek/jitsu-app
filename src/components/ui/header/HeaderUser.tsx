import React, { FC } from 'react';
import { HeaderButton } from './HeaderButton';
import { useMe } from '../../../hooks/useMe';

interface IProps {}

export const HeaderUser: FC<IProps> = () => {
  const { me } = useMe();

  return <HeaderButton>{me?.nickname}</HeaderButton>;
};
