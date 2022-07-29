import React, { useState, useMemo, useCallback } from 'react';

import useModal from '@/hooks/useModal';

import Input from '@/components/atoms/Input';
import Textarea from '@/components/atoms/Textarea';

import InfoTitle from '@/components/project/InfoTitle';

import TimeTableSelector from '@/components/common/TimeTableSelector';
import TimePicker from '@/components/common/TimePicker';
import Calendar from '@/components/common/Calendar';

import { RequiredInfo } from '@/types/project';

import * as Styled from './style';

const InfoBox = () => {
  const [info, setInfo] = useState<RequiredInfo>({
    name: '',
    description: '',
  });

  const [hourType, setHourType] = useState<'AM' | 'PM'>('AM');
  const [hour, setHour] = useState<string>('00');
  const [minute, setMinute] = useState<string>('00');

  const { isShowModal: isShowCalendar, toggleModal: onClickCalendar } = useModal();
  const { isShowModal: isShowTimePicker, toggleModal: onClickTimePicker } = useModal();

  const isHourTypeAM: boolean = useMemo(() => hourType === 'AM', [hourType]);

  const onChangeInfo = useCallback((e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value } = e.target;

    setInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.Row>
          <InfoTitle htmlFor="name" title="프로젝트 이름" subTitle="*255자 이내" />
          <Input
            type="text"
            id="name"
            name="name"
            width={580}
            height={30}
            maxLength={255}
            value={info.name}
            onChange={onChangeInfo}
          />
        </Styled.Row>
        <Styled.Row>
          <InfoTitle title="마감기한" isLabel={false} />
          <Styled.TimeTableBox>
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
          </Styled.TimeTableBox>
        </Styled.Row>
        <Styled.Row>
          <InfoTitle htmlFor="description" title="프로젝트 소개" />
          <Textarea
            width={580}
            height={139}
            id="description"
            name="description"
            maxLength={255}
            value={info.description}
            onChange={onChangeInfo}
          />
        </Styled.Row>
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default InfoBox;
