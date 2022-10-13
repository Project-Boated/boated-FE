import React from 'react';
import Link from 'next/link';

import { kakaoLoginPath } from '@/lib/constants';

import Icon from '@/components/atoms/Icon';

import { Wrapper } from './style';

const KakaoLoginButton = () => {
  return (
    <Link href={kakaoLoginPath} passHref>
      <Wrapper>
        <Icon icon="KakaoSymbol" width={21} height={20} />
        <span>카카오 로그인</span>
      </Wrapper>
    </Link>
  );

export default KakaoLoginButton;
