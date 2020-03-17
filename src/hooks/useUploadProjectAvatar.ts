import axios from 'axios';
import { useCallback } from 'react';
import { ENDPOINTS } from '../common/endpoints';
import { ImageModel } from '../models/image';

export const useUploadProjectAvatar = () => {
  return useCallback(async (projectId: string, file: File): Promise<ImageModel[]> => {
    const formData = new FormData();
    formData.append('file', file);
    const result = await axios.patch(ENDPOINTS.PATCH_PROJECT_UPLOAD_AVATAR.replace(':projectId', projectId), formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return result.data;
  }, []);
};
