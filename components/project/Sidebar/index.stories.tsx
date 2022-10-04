import React from 'react';

import { Story } from '@storybook/react';

import getSideTabList from '@/lib/util/getSideTabList';

import SideTab from '@/components/project/Sidebar/TabList/SideTab';
import Tab from '@/components/project/Sidebar/TabList/Tab';

import { TabListContainer } from '@/styles/pages/Project/style';

import Sidebar, { SidebarProps } from '.';

export default {
  component: Sidebar,
  title: 'project/Sidebar',
};

const Template: Story<SidebarProps> = (args: SidebarProps) => <Sidebar {...args} />;

export const ProjectDetailPageSidebar = Template.bind({});
ProjectDetailPageSidebar.args = {
  ProjectInfo: <></>,
  TabList: <SideTab path="" sideTabList={getSideTabList(1)} />,
};

export const ProjectPageSidebar = Template.bind({});
ProjectPageSidebar.args = {
  UserInfo: <></>,
  TabList: (
    <TabListContainer>
      <Tab href="/project/invite">프로젝트 초대 확인하기</Tab>
      <Tab href="/medal">나의 메달 확인하기</Tab>
    </TabListContainer>
  ),
};
