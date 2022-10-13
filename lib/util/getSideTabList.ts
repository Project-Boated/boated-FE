import { SIDE_TAB } from '@/lib/constants';

export interface SideTabState {
  tab: string;
  link: string;
  path: string;
}

const getSideTabList = (id: number) => [
  {
    tab: SIDE_TAB.task,
    link: `/project/${id}/kanban`,
    path: `/project/${id}/kanban`,
  },
  {
    tab: SIDE_TAB.project,
    link: `/project/${id}`,
    path: '',
  },
  { tab: SIDE_TAB.presentation, link: `/project/${id}/presentation`, path: '/presentation' },
];

export default getSideTabList;
