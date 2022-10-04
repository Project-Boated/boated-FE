import React from 'react';

import Icon from '@/components/atoms/Icon';
import KakaoLoginButton from '@/components/Login/KakaoLoginButton';

import { Wrapper, SeaWaveWrapper, Container, Text } from './style';

const LoginBox = () => (
    <Wrapper>
      <SeaWaveWrapper>
        <Icon icon="SeaWaveLarge" />
      </SeaWaveWrapper>
      <Container>
        <Icon icon="BoatedSymbol" width={65} height={63} />
        <Icon icon="BoatedSignature" width={143} height={42} />
        <Text>
          로그인하고 <br /> 팀 프로젝트를 시작해보세요!
        </Text>
        <KakaoLoginButton />
      </Container>
    </Wrapper>
  );

export default LoginBox;
