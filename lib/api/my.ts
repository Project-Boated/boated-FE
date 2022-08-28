import request from '@/lib/api/request';

import { GetMyTaskLikeResponse, PostMyTaskLikeChangeProps } from '@/lib/api/types';

const profileBaseUrl = '/api/my';

const profileUrl = {
  getMyTaskLike: `${profileBaseUrl}/likes`,
  postMyTaskLikeChange: ({ originalIndex, changeIndex }: PostMyTaskLikeChangeProps) =>
    `${profileBaseUrl}/likes/change/${originalIndex}/${changeIndex}`,
};

export const getMyTaskLike = () =>
  request<GetMyTaskLikeResponse>('GET', profileUrl.getMyTaskLike).then((res) => res.data);

export const postMyTaskLikeChange = ({ originalIndex, changeIndex }: PostMyTaskLikeChangeProps) =>
  request('POST', profileUrl.postMyTaskLikeChange({ originalIndex, changeIndex }));
