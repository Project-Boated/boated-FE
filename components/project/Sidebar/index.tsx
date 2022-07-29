import React from 'react';

import Calendar from '@/components/date/Calendar';

import * as Styled from './style';

const Sidebar = () => {
  return (
    <Styled.Container>
      <Styled.ProjectProfileContainer />
      <Styled.SideTab />
      <Calendar />
    </Styled.Container>
  );
};

export default Sidebar;
