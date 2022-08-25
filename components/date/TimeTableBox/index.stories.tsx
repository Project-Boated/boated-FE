import React from 'react';
import { Story } from '@storybook/react';

import useCalendar from '@/components/date/Calendar/useCalendar';
import useTimePicker from '@/components/date/TimePicker/useTimePicker';

import TimeTableBox from '.';

export default {
  component: TimeTableBox,
  title: 'date/TimeTableBox',
};

const Template = () => {
  const { year, setYear, month, setMonth, date, setDate } = useCalendar();
  const { hourType, setHourType, hour, setHour, minute, setMinute } = useTimePicker();

  return (
    <TimeTableBox
      year={year}
      month={month}
      date={date}
      hourType={hourType}
      hour={hour}
      minute={minute}
      setYear={setYear}
      setMonth={setMonth}
      setDate={setDate}
      setHourType={setHourType}
      setHour={setHour}
      setMinute={setMinute}
    />
  );
};

export const Default = Template.bind({});
