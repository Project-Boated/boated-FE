import React from 'react';

import { SideTabState } from '@/lib/util/getSideTabList';

import Tab from '@/components/project/Sidebar/TabList/Tab';

import * as Styled from './style';

export interface SideTabProps {
  path: string;
  sideTabList: SideTabState[];
}

const SideTab = ({ path, sideTabList }: SideTabProps) => (
    <Styled.Container>
      {sideTabList.map((sideTab, idx) => (
        <Tab key={idx} isFocused={path === sideTab.path} href={sideTab.link}>
          {sideTab.tab}
        </Tab>
      ))}
    </Styled.Container>
  );

export default SideTab;
