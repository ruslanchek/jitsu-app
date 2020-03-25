import React, { FC } from 'react';
import { ScreenWrapper } from '../common/ScreenWrapper';
import { RouteComponentProps } from '@reach/router';
import { useInvite } from '../../hooks/useInvite';

interface IProps extends RouteComponentProps {
  code?: string;
}

export const InviteScreen: FC<IProps> = ({ code }) => {
  const { invite, loading } = useInvite(code);
  return <ScreenWrapper>{invite && invite.id}</ScreenWrapper>;
};
