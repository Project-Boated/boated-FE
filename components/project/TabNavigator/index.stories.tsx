import React from 'react';
import { Story } from '@storybook/react';

import TabNavigator, { TabNavigatorProps } from '.';

export default {
  component: TabNavigator,
  title: 'project/TabNavigator',
};

const Template: Story<TabNavigatorProps> = (args: TabNavigatorProps) => <TabNavigator {...args} />;

export const Default = Template.bind({});
Default.args = {
  selectedTab: '내 프로젝트',
};
