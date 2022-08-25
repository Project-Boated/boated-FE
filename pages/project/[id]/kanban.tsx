import React from 'react';

import AppLayoutMain from '@/components/common/Layout/AppLayoutMain';

import Sidebar from '@/components/project/Sidebar';

import Kanban from '@/components/project/Kanban';

import * as Styled from '@/styles/pages/Project/kanban';

const KanbanPage = () => {
  return (
    <AppLayoutMain height="100vh" bottom="-45vh">
      <Styled.Container>
        <Sidebar />
        <Kanban />
      </Styled.Container>
    </AppLayoutMain>
  );
};

export default KanbanPage;
