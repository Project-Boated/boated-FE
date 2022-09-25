import React from 'react';
import { Story } from '@storybook/react';

import Date from '.';

import { DateProps } from '@/components/ganttChart/Calendar/type';

export default {
  component: Date,
  title: 'ganttChart/Calendar/Date',
};

const Template: Story<DateProps> = (args: DateProps) => <Date {...args} />;

export const Default = Template.bind({});
Default.args = {
  date: 29,
  dayOfTheWeek: '월',
};
