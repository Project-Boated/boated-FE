import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import getSideTabList from '@/lib/util/getSideTabList';

import AppLayoutMain from '@/components/common/Layout/AppLayoutMain';

import Sidebar from '@/components/project/Sidebar';
import SideTab from '@/components/project/Sidebar/TabList/SideTab';

import Kanban from '@/components/project/Kanban';

import * as Styled from '@/styles/pages/Project/kanban';

const KanbanPage = () => {
  const router = useRouter();

  const [id, setId] = useState<number>();

  useEffect(() => {
    if (!router.isReady) return;

    setId(parseInt(router.query.id as string, 10));
  }, [router.isReady]);

  return (
    <AppLayoutMain height="100vh" bottom="-45vh">
      {id && (
        <Styled.Container>
          <Sidebar TabList={<SideTab path={router.asPath} sideTabList={getSideTabList(id)} />} />
          <Kanban />
        </Styled.Container>
      )}
    </AppLayoutMain>
  );
};

export default KanbanPage;
