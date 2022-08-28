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
