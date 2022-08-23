import React, { useMemo } from 'react';

import useModal from '@/hooks/useModal';

import Calendar, { CalendarProps } from '@/components/date/Calendar';
import TimeTableSelector from '@/components/date/TimeTableSelector';
import TimePicker, { TimePickerProps } from '@/components/date/TimePicker';

import * as Styled from './style';

export interface TimeTableBoxProps extends CalendarProps, Omit<TimePickerProps, 'isHourTypeAM'> {
  year: string;
  month: string;
  hourType: 'AM' | 'PM';
}

const TimeTableBox = ({
  year,
  month,
  date,
  hourType,
  hour,
  minute,
  setYear,
  setMonth,
  setDate,
  setHourType,
  setHour,
  setMinute,
}: TimeTableBoxProps) => {
  const { isShowModal: isShowCalendar, toggleModal: onClickCalendar } = useModal();
  const { isShowModal: isShowTimePicker, toggleModal: onClickTimePicker } = useModal();

  const isHourTypeAM: boolean = useMemo(() => hourType === 'AM', [hourType]);

  return (
    <Styled.Container>
      <Styled.SelectorContainer>
        <TimeTableSelector type="Calendar" contents={`${year}.${month}.${date}`} onClick={onClickCalendar} />
        {isShowCalendar && <Calendar date={date} setYear={setYear} setMonth={setMonth} setDate={setDate} />}
      </Styled.SelectorContainer>
      <Styled.SelectorContainer>
        <TimeTableSelector type="Clock" contents={`${hour}:${minute} ${hourType}`} onClick={onClickTimePicker} />
        {isShowTimePicker && (
          <TimePicker
            isHourTypeAM={isHourTypeAM}
            hour={hour}
            minute={minute}
            setHourType={setHourType}
            setHour={setHour}
            setMinute={setMinute}
          />
        )}
      </Styled.SelectorContainer>
    </Styled.Container>
  );
};

export default TimeTableBox;
