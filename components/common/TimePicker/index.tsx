import React, { useCallback } from 'react';

import { amHourList, pmHourList, minuteList } from '@/lib/constants/dropdownList';

import Button from '@/components/atoms/Button';

import DropDown from '@/components/common/DropDown';

import Theme from '@/styles/Theme';

import * as Styled from './style';

export interface TimePickerProps {
  isHourTypeAM: boolean;
  hour: string;
  minute: string;
  setHourType: React.Dispatch<React.SetStateAction<'AM' | 'PM'>>;
  setHour: React.Dispatch<React.SetStateAction<string>>;
  setMinute: React.Dispatch<React.SetStateAction<string>>;
}

const TimePicker = ({ isHourTypeAM, hour, minute, setHourType, setHour, setMinute }: TimePickerProps) => {
  const onClickHourType = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const text = e.currentTarget.innerText as 'AM' | 'PM';
    setHourType(text);
  }, []);

  return (
    <Styled.Container>
      <Styled.InnerContainer>
        <DropDown
          type="size-47"
          defaultTitle="HH"
          selectList={isHourTypeAM ? amHourList : pmHourList}
          selectedItem={hour}
          setSelectedItem={setHour}
        />
        <DropDown
          type="size-47"
          defaultTitle="MM"
          selectList={minuteList}
          selectedItem={minute}
          setSelectedItem={setMinute}
        />
        <Styled.ButtonContainer>
          <Button
            width={40}
            height={26}
            fontColor={isHourTypeAM ? Theme.S_0 : Theme.M_1}
            fontSize={10}
            borderRadius={20}
            backgroundColor={isHourTypeAM ? Theme.M_1 : Theme.S_0}
            onClick={onClickHourType}
          >
            AM
          </Button>
          <Button
            width={40}
            height={26}
            fontColor={isHourTypeAM ? Theme.M_1 : Theme.S_0}
            fontSize={10}
            borderRadius={20}
            backgroundColor={isHourTypeAM ? Theme.S_0 : Theme.M_1}
            onClick={onClickHourType}
          >
            PM
          </Button>
        </Styled.ButtonContainer>
      </Styled.InnerContainer>
    </Styled.Container>
  );
};

export default TimePicker;
