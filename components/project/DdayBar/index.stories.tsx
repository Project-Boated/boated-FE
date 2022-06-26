import React from 'react';
import { Story } from '@storybook/react';

import DdayBar, { DdayBarProps } from '.';

export default {
  component: DdayBar,
  title: 'project/DdayBar',
};

const Template: Story<DdayBarProps> = (args: DdayBarProps) => <DdayBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  dday: 50,
  totalDay: 70,
};
