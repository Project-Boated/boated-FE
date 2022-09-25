import { MyProjectState, TaskState } from '@/lib/api/types/projects';

export interface GetMyTaskLikeResponse {
  taskLikes: Array<{
    project: Omit<MyProjectState, 'crews' | 'captain'>;
    task: Omit<TaskState, 'like'>;
  }>;
}

export interface PostMyTaskLikeChangeProps {
  originalIndex: number;
  changeIndex: number;
}

export interface GetMyGanttChartProps {
  year: number;
  month: number;
}

interface GanttChartInfo {
  id: number;
  name: string;
  createdDate: string;
  deadline: string;
  period: number;
}

export interface ProjectState extends GanttChartInfo {
  isClicked?: boolean;
  assignedTasks: Array<GanttChartInfo>;
}

export interface GetMyGanttChartResponse {
  projects: Array<ProjectState>;
}
