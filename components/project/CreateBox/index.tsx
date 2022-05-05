import React from 'react';

import Icon from '@/components/atoms/Icon';

import { Wrapper, SeaWaveWrapper, LeftContainer, RightContainer } from './style';

const CreateBox = () => {
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
      <RightContainer></RightContainer>
    </Wrapper>
  );
};

export default CreateBox;
