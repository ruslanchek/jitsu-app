import React, { FC } from 'react';
import { ScreenWrapper } from '../common/ScreenWrapper';
import { RouteComponentProps } from '@reach/router';
import { useInvite } from '../../hooks/useInvite';
import { Button } from '../ui/buttons/Button';
import { useAcceptInvite } from '../../hooks/useAcceptInvite';

interface IProps extends RouteComponentProps {
  code?: string;
}

export const InviteScreen: FC<IProps> = ({ code }) => {
  const { invite, loading } = useInvite(code);
  const { acceptInvite } = useAcceptInvite();
  return (
    <ScreenWrapper>
      {invite && invite.id}
      <Button
        onClick={async () => {
          if (code) {
            await acceptInvite(code);
          }
        }}>
        Accept
      </Button>
    </ScreenWrapper>
  );
};
