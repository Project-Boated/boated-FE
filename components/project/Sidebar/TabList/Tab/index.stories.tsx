import React from 'react';

import { Story } from '@storybook/react';

import Tab, { TabProps } from '@/components/project/Sidebar/TabList/Tab';

export default {
  component: Tab,
  title: 'project/Sidebar/TabList/Tab',
};

const Template: Story<TabProps> = (args: TabProps) => <Tab {...args} />;

export const Default = Template.bind({});
Default.args = {
  href: '/project',
  children: '프로젝트&팀원',
};
