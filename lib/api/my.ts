import request from '@/lib/api/request';

import { GetMyTaskLikeResponse } from '@/lib/api/types';

const profileBaseUrl = '/api/my';

const profileUrl = {
  getMyTaskLike: `${profileBaseUrl}/likes`,
};

export const getMyTaskLike = () =>
  request<GetMyTaskLikeResponse>('GET', profileUrl.getMyTaskLike).then((res) => res.data);
