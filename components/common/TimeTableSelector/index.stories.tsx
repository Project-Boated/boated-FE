import React from 'react';
import { Story } from '@storybook/react';

import TimeTableSelector, { TimeTableSelectorProps } from '.';

export default {
  component: TimeTableSelector,
  title: 'project/TimeTableSelector',
};

const Template: Story<TimeTableSelectorProps> = (args: TimeTableSelectorProps) => <TimeTableSelector {...args} />;

export const Calendar = Template.bind({});
Calendar.args = {
  type: 'Calendar',
  contents: '2022.07.16',
};

export const Clock = Template.bind({});
Clock.args = {
  type: 'Clock',
  contents: '00:00 AM',
};
