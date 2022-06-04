import React from 'react';

import { yearList, monthList, dateList, amHourList, pmHourList, minuteList } from '@/lib/constants/dropdownList';

import Icon from '@/components/atoms/Icon';
import Input from '@/components/atoms/Input';
import Text from '@/components/atoms/Text';
import Button from '@/components/atoms/Button';

import DropDown from '@/components/common/DropDown';
import ToggleSwitch from '@/components/common/ToggleSwitch';

import Theme from '@/styles/Theme';

import { RequiredInfoState, OptionalInfoState } from '@/pages/project/create';

import {
  Wrapper,
  SeaWaveWrapper,
  LeftContainer,
  RightContainer,
  WarningAbsoluteWrapper,
  StyledLabel,
  ProjectNameContainer,
  ProjectDueDateContainer,
  DateWrapper,
  TimeWrapper,
  ProjectDescriptionContainer,
  StyledTextArea,
} from './style';

interface Props {
  isRight: boolean;
  requiredInfo: RequiredInfoState;
  optionalInfo: OptionalInfoState;
  setIsRight: React.Dispatch<React.SetStateAction<boolean>>;
  setRequiredInfo: React.Dispatch<React.SetStateAction<RequiredInfoState>>;
  setOptionalInfo: React.Dispatch<React.SetStateAction<OptionalInfoState>>;
  onClickSubmit: () => void;
}

const CreateBox = ({
  isRight,
  requiredInfo,
  optionalInfo,
  setIsRight,
  setRequiredInfo,
  setOptionalInfo,
  onClickSubmit,
}: Props) => {
  const onChangeRequiredInfo = (e: React.ChangeEvent<any>) => {
    const { name, value } = e.target;

    setRequiredInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Wrapper>
      <SeaWaveWrapper>
        <Icon icon="SeaWaveMedium" />
      </SeaWaveWrapper>
      <LeftContainer>
        <img src="/imgs/InnerCircle.png" />
        <img src="/imgs/OuterCircle.png" />
        <Icon icon="BoatedSymbol" width={49} height={46} />
        <Text fontSize={18} fontWeight={300} lineHeight={18} fontFamily="Gmarket Sans">
          프로젝트 생성하기
        </Text>
      </LeftContainer>
      <WarningAbsoluteWrapper>
        <Text color={Theme.W_1} fontSize={12} fontWeight={400}>
          *는 필수 입력사항이에요!
        </Text>
      </WarningAbsoluteWrapper>
      <RightContainer>
        <ProjectNameContainer>
          <StyledLabel htmlFor="name">
            프로젝트 이름 <span className="is-required">*</span>
          </StyledLabel>
          <Input
            type="text"
            id="name"
            name="name"
            width={566}
            height={40}
            value={requiredInfo.name}
            onChange={onChangeRequiredInfo}
          />
          <Text color={Theme.W_1} fontSize={8} fontWeight={400}>
            중복된 이름이에요!
          </Text>
        </ProjectNameContainer>
        <ProjectDueDateContainer>
          <Text fontSize={14}>프로젝트 기한</Text>
          <DateWrapper>
            <DropDown
              type="size-176"
              defaultTitle="YYYY"
              target="year"
              selectList={yearList}
              selectedItem={optionalInfo.year}
              setSelectedItem={setOptionalInfo}
            />
            <DropDown
              type="size-110"
              defaultTitle="MM"
              target="month"
              selectList={monthList}
              selectedItem={optionalInfo.month}
              setSelectedItem={setOptionalInfo}
            />
            <DropDown
              type="size-110"
              defaultTitle="DD"
              target="date"
              selectList={dateList}
              selectedItem={optionalInfo.date}
              setSelectedItem={setOptionalInfo}
            />
          </DateWrapper>
          <TimeWrapper>
            <ToggleSwitch
              width={134}
              height={40}
              leftContent="AM"
              rightContent="PM"
              isRight={isRight}
              setIsRight={setIsRight}
            />
            <DropDown
              type="size-72"
              defaultTitle="HH"
              target="hour"
              selectList={isRight ? pmHourList : amHourList}
              selectedItem={optionalInfo.hour}
              setSelectedItem={setOptionalInfo}
            />
            <DropDown
              type="size-72"
              defaultTitle="MM"
              target="minute"
              selectList={minuteList}
              selectedItem={optionalInfo.minute}
              setSelectedItem={setOptionalInfo}
            />
          </TimeWrapper>
        </ProjectDueDateContainer>
        <ProjectDescriptionContainer>
          <StyledLabel htmlFor="description">
            프로젝트 소개 <span className="is-required">*</span>
          </StyledLabel>
          <StyledTextArea
            id="description"
            name="description"
            value={requiredInfo.description}
            onChange={onChangeRequiredInfo}
          />
        </ProjectDescriptionContainer>
        <Button width={200} height={52} onClick={onClickSubmit}>
          생성하기
        </Button>
      </RightContainer>
    </Wrapper>
  );
};

export default CreateBox;
