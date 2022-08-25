import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import useCalendar from '@/components/date/Calendar/useCalendar';
import Calendar from '@/components/date/Calendar';

import * as Styled from './style';

const Sidebar = () => {
  const router = useRouter();
  const { date, setDate, setMonth, setYear } = useCalendar();

  const path = router.route.split('[id]')[1];
  const {
    query: { id },
  } = router;

  const sideTab = useMemo(
    () => [
      {
        tab: '프로젝트&팀원 관리',
        link: `/project/${id}`,
        path: '',
      },
      {
        tab: 'Task',
        link: `/project/${id}/kanban`,
        path: '/kanban',
      },
      { tab: '발표 영상', link: `/project/${id}/presentation`, path: '/presentation' },
    ],
    [],
  );

  return (
    <Styled.Container>
      <Styled.ProjectProfileContainer />
      <Styled.SideTab>
        {Object.values(sideTab).map((info) => (
          <Link href={info.link} key={info.tab}>
            <a>
              <Styled.Tab isClicked={info.path === path}>{info.tab}</Styled.Tab>
            </a>
          </Link>
        ))}
      </Styled.SideTab>
      <Calendar date={date} setDate={setDate} setMonth={setMonth} setYear={setYear} />
    </Styled.Container>
  );
};

export default Sidebar;
