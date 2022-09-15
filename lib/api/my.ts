import request from '@/lib/api/request';

import {
  GetMyTaskLikeResponse,
  PostMyTaskLikeChangeProps,
  GetMyGanttChartProps,
  GetMyGanttChartResponse,
} from '@/lib/api/types';

const myBaseUrl = '/api/my';

const myUrl = {
  getMyTaskLike: `${myBaseUrl}/likes`,
  postMyTaskLikeChange: ({ originalIndex, changeIndex }: PostMyTaskLikeChangeProps) =>
    `${myBaseUrl}/likes/change/${originalIndex}/${changeIndex}`,
  getMyGanttChart: `${myBaseUrl}/gantt-chart`,
};

export const getMyTaskLike = () => request<GetMyTaskLikeResponse>('GET', myUrl.getMyTaskLike).then((res) => res.data);

export const postMyTaskLikeChange = ({ originalIndex, changeIndex }: PostMyTaskLikeChangeProps) =>
  request('POST', myUrl.postMyTaskLikeChange({ originalIndex, changeIndex }));

export const getMyGanttChart = ({ year, month }: GetMyGanttChartProps) =>
  request<GetMyGanttChartResponse, null, GetMyGanttChartProps>('GET', myUrl.getMyGanttChart, null, {
    year,
    month,
  }).then((res) => res.data);
