import React, { useEffect } from 'react';

import { Story } from '@storybook/react';

import useCalendar from '@/components/date/Calendar/useCalendar';
import useTimePicker from '@/components/date/TimePicker/useTimePicker';

import InfoBox, { InfoBoxProps } from '@/components/project/InfoBox';

export default {
  component: InfoBox,
  title: 'project/InfoBox',
};

const Template: Story<InfoBoxProps> = (args: InfoBoxProps) => {
  const { setYear, setMonth, setDate } = useCalendar();
  const { setHourType, setHour, setMinute } = useTimePicker();

  return (
    <InfoBox
      {...args}
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
Default.args = {
  year: '2022',
  month: '07',
  date: '16',
  hourType: 'AM',
  hour: '07',
  minute: '16',
  name: '프로젝트 이름',
  description: '프로젝트 설명',
};
