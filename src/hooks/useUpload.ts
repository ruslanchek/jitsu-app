import axios from 'axios';
import { useCallback } from 'react';
import { ENDPOINTS } from '../common/endpoints';

export const useUpload = () => {
  return useCallback(async (projectId: string, file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    return await axios.patch(ENDPOINTS.PATCH_PROJECT_UPLOAD_AVATAR.replace(':projectId', projectId), formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
  }, []);
};
