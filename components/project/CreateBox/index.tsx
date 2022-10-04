import React, { useCallback } from 'react';

import { yearList, monthList, dateList, amHourList, pmHourList, minuteList } from '@/lib/constants/dropdownList';

import Button from '@/components/atoms/Button';
import Icon from '@/components/atoms/Icon';
import Input from '@/components/atoms/Input';
import Text from '@/components/atoms/Text';
import Textarea from '@/components/atoms/Textarea';
import DropDown from '@/components/common/DropDown';
import ToggleSwitch from '@/components/common/ToggleSwitch';

import { RequiredInfo, OptionalInfo } from '@/types/project';

import Theme from '@/styles/Theme';

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
} from './style';

export interface Props {
  isRight: boolean;
  requiredInfo: RequiredInfo;
  optionalInfo: OptionalInfo;
  isProjectNameDuplicated: boolean;
  setIsRight: React.Dispatch<React.SetStateAction<boolean>>;
  setRequiredInfo: React.Dispatch<React.SetStateAction<RequiredInfo>>;
  setOptionalInfo: React.Dispatch<React.SetStateAction<OptionalInfo>>;
  onClickSubmit: () => void;
}

const CreateBox = ({
  isRight,
  requiredInfo,
  optionalInfo,
  isProjectNameDuplicated,
  setIsRight,
  setRequiredInfo,
  setOptionalInfo,
  onClickSubmit,
}: Props) => {
  const onChangeRequiredInfo = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      const { name, value } = e.target;

      setRequiredInfo((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    [requiredInfo],
  );

  return (
    <Wrapper>
      <SeaWaveWrapper>
        <Icon icon="SeaWaveMedium" />
      </SeaWaveWrapper>
      <LeftContainer>
        <img src="/imgs/InnerCircle.png" alt="logo" />
        <img src="/imgs/OuterCircle.png" alt="logo" />
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
          {isProjectNameDuplicated && (
            <Text color={Theme.W_1} fontSize={8} fontWeight={400}>
              중복된 이름이에요!
            </Text>
          )}
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
          <Textarea
            width={566}
            height={108}
            id="description"
            name="description"
            maxLength={255}
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
