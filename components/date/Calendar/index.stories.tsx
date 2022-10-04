import React from 'react';

import { Story } from '@storybook/react';

import useCalendar from './useCalendar';

import Calendar, { CalendarProps } from '.';

export default {
  component: Calendar,
  title: 'date/Calendar',
};

const Template: Story<CalendarProps> = (args: CalendarProps) => {
  const { setYear, setMonth, date, setDate } = useCalendar();

  return <Calendar {...args} date={date} setYear={setYear} setMonth={setMonth} setDate={setDate} />;
};

export const Default = Template.bind({});
