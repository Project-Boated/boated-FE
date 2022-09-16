import React from 'react';
import { Story } from '@storybook/react';

import getSideTabList from '@/lib/util/getSideTabList';

import SideTab, { SideTabProps } from '@/components/project/Sidebar/TabList/SideTab';

export default {
  component: SideTab,
  title: 'project/Sidebar/TabList/SideTab',
};

const Template: Story<SideTabProps> = (args: SideTabProps) => <SideTab {...args} />;

export const Default = Template.bind({});
Default.args = {
  path: '',
  sideTabList: getSideTabList(1),
};
