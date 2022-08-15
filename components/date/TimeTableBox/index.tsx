import React, { useState, useMemo } from 'react';

import useModal from '@/hooks/useModal';

import Calendar from '@/components/date/Calendar';
import TimeTableSelector from '@/components/date/TimeTableSelector';
import TimePicker from '@/components/date/TimePicker';

import { ProjectInfoState } from '@/lib/api/types';

import * as Styled from './style';

const TimeTableBox = ({ deadline }: Partial<Pick<ProjectInfoState, 'deadline'>>) => {
  const { isShowModal: isShowCalendar, toggleModal: onClickCalendar } = useModal();
  const { isShowModal: isShowTimePicker, toggleModal: onClickTimePicker } = useModal();

  let date,
    tempYear,
    tempMonth,
    tempDay = '';
  let time,
    tempHour,
    tempMinute,
    tempSecond = '';
  let tempHourType: 'AM' | 'PM' = 'AM';

  if (deadline) {
    [date, time] = deadline.split(' ');
    [tempYear, tempMonth, tempDay] = date.split('-');
    [tempHour, tempMinute, tempSecond] = time.split(':');
    tempHourType = Number(tempHour) > 12 ? 'PM' : 'AM';
  }

  const [hourType, setHourType] = useState<'AM' | 'PM'>(tempHourType ?? 'AM');
  const [hour, setHour] = useState<string>(tempHour ?? '00');
  const [minute, setMinute] = useState<string>(tempMinute ?? '00');

  const isHourTypeAM: boolean = useMemo(() => hourType === 'AM', [hourType]);

  return (
    <Styled.Container>
      <Styled.SelectorContainer>
        <TimeTableSelector type="Calendar" contents="2022.08.08" onClick={onClickCalendar} />
        {isShowCalendar && <Calendar />}
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
