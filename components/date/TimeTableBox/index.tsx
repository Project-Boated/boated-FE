import React, { useState, useMemo } from 'react';

import useModal from '@/hooks/useModal';

import Calendar from '@/components/date/Calendar';
import TimeTableSelector from '@/components/date/TimeTableSelector';
import TimePicker from '@/components/date/TimePicker';

import * as Styled from './style';

const TimeTableBox = () => {
  const { isShowModal: isShowCalendar, toggleModal: onClickCalendar } = useModal();
  const { isShowModal: isShowTimePicker, toggleModal: onClickTimePicker } = useModal();

  const [hourType, setHourType] = useState<'AM' | 'PM'>('AM');
  const [hour, setHour] = useState<string>('00');
  const [minute, setMinute] = useState<string>('00');

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
