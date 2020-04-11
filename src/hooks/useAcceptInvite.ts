import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { InviteModel } from '../models/invite';
import { useMutationResult } from './useMutationResult';
import { useNavigate } from '@reach/router';
import { UNAUTHORIZED_REDIRECT_PATH } from '../common/paths';
import { EStorageNames } from '../common/storage-names';
import { useCheckAuth } from './useCheckAuth';

export const useAcceptInvite = () => {
  const [acceptInvite, { loading: acceptInviteLoading }] = useMutation(QUERY);
  const mutationResult = useMutationResult(InviteModel, 'acceptInvite');
  const { checkAuth } = useCheckAuth();
  const navigate = useNavigate();
  return {
    loading: acceptInviteLoading,
    acceptInvite: async (inviteCode: string) => {
      if (await checkAuth()) {
        return await mutationResult(
          acceptInvite({
            variables: {
              inviteCode,
            },
          }),
        );
      } else {
        localStorage.setItem(EStorageNames.InviteCode, inviteCode);
        await navigate(UNAUTHORIZED_REDIRECT_PATH);
      }
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
