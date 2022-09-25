import { GetMyGanttChartProps } from '@/lib/api/types';

export const MY_TASK_LIKES = '/my/task/likes';
export const GET_MY_GANTT_CHART = ({ year, month }: GetMyGanttChartProps) =>
  `/my/gantt-chart?year=${year}&month=${month}`;
