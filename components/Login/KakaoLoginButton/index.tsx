import React from 'react';

import { kakaoLoginPath } from '@/lib/constants';

import Icon from '@/components/atoms/Icon';

import { Wrapper } from './style';

const KakaoLoginButton = () => {
  return (
    <Wrapper href={kakaoLoginPath}>
      <Icon icon="KakaoSymbol" width={21} height={20} />
      <span>카카오 로그인</span>
    </Wrapper>
  );
};

export default KakaoLoginButton;
