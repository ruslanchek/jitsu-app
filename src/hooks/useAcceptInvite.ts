import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { InviteModel } from '../models/invite';
import { useMutationResult } from './useMutationResult';
import { useGetMe } from './useGetMe';
import { useNavigate } from '@reach/router';
import { UNAUTHORIZED_REDIRECT_PATH } from '../common/paths';
import { EStorageNames } from '../common/storage-names';

export const useAcceptInvite = () => {
  const [acceptInvite, { loading: acceptInviteLoading }] = useMutation(QUERY);
  const mutationResult = useMutationResult(InviteModel, 'acceptInvite');
  const { getMe, loading: meLoading } = useGetMe();
  const navigate = useNavigate();
  return {
    loading: acceptInviteLoading || meLoading,
    acceptInvite: async (inviteCode: string) => {
      try {
        await getMe();
      } catch (e) {
        localStorage.setItem(EStorageNames.InviteCode, inviteCode);
        navigate(UNAUTHORIZED_REDIRECT_PATH);
        return;
      }

      return await mutationResult(
        acceptInvite({
          variables: {
            inviteCode,
          },
        }),
      );
    },
  };
};

const QUERY = gql`
  mutation AcceptInvite($inviteCode: String!) {
    acceptInvite(inviteCode: $inviteCode) {
      id
      active
      date
      project {
        id
        name
      }
    }
  }
`;
