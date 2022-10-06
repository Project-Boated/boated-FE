import React from 'react';

import { Story } from '@storybook/react';

import Body, { BodyProps } from '.';
import useCalendar from '@/components/ganttChart/Calendar/useCalendar';


export default {
  component: Body,
  title: 'ganttChart/Calendar/Body',
};

const Template: Story<BodyProps> = () => {
  const { year, month, calendarList } = useCalendar();

  return <Body year={year} month={month} height={500} calendarList={calendarList} projectList={[]} />;
};

export const Default = Template.bind({});
Default.args = {};
