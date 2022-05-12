import React, { useState } from 'react';

import { yearList, monthList, dayList, amHourList, pmHourList, minuteList } from '@/lib/constants/dropdownList';

import Icon from '@/components/atoms/Icon';
import Input from '@/components/atoms/Input';
import Text from '@/components/atoms/Text';

import DropDown from '@/components/common/DropDown';

import Theme from '@/styles/Theme';

import { Wrapper, SeaWaveWrapper, LeftContainer, RightContainer, StyledLabel } from './style';

const CreateBox = () => {
  const [year, setYear] = useState<string>('');

  const [projectName, setProjectName] = useState<string>('');

  const onChangeProjectName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProjectName(e.target.value);
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
        <span>프로젝트 생성하기</span>
      </LeftContainer>
      <RightContainer>
        <div>
          <StyledLabel htmlFor="projectName">
            프로젝트 이름 <span className="is-required">*</span>
          </StyledLabel>
          <Input type="text" width={566} height={40} value={projectName} onChange={onChangeProjectName} />
          <Text color={Theme.W_1} fontSize={8} fontWeight={400}>
            중복된 이름이에요!
          </Text>
        </div>
        <Text fontSize={14}>프로젝트 기한</Text>
      </RightContainer>
    </Wrapper>
  );
};

export default CreateBox;
