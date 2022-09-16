import React from 'react';

import useCalendar from '@/components/date/Calendar/useCalendar';
import Calendar from '@/components/date/Calendar';

import * as Styled from './style';

export interface SidebarProps {
  ProjectInfo?: React.ReactNode;
  UserInfo?: React.ReactNode;
  TabList: React.ReactNode;
}

const Sidebar = ({ ProjectInfo, UserInfo, TabList }: SidebarProps) => {
  const { date, setDate, setMonth, setYear } = useCalendar();

  return (
    <Styled.Container>
      <Styled.ProjectProfileContainer />
      {ProjectInfo || UserInfo}
      {TabList}
      <Calendar date={date} setDate={setDate} setMonth={setMonth} setYear={setYear} />
    </Styled.Container>
  );
};

export default Sidebar;
