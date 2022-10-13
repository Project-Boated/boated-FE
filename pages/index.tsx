import React from 'react';

import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';

import useGetMyInfo from '@/hooks/useGetMyInfo';

import Icon from '@/components/atoms/Icon';

import GNB from '@/components/common/GNB';

import * as Styled from '@/styles/pages/LandingPage/style';

const LandingPage: NextPage = () => {
  const { myInfo } = useGetMyInfo();
  const router = useRouter();

  if (myInfo) {
    router.push('/project');
  }

  return (
    <Styled.Wrapper>
      <GNB />
      <Styled.MainSection>
        <Styled.MainContainer>
          <Styled.WelcomeContainer>
            <Styled.WelcomePhrase>Let’s start team projects with</Styled.WelcomePhrase>
            <Styled.IconWrapper>
              <Icon icon="BoatedSignature" width={239} height={70} />
            </Styled.IconWrapper>
            <Styled.IconWrapper>
              <Icon icon="ExclamationMark" width={17} height={70} />
            </Styled.IconWrapper>
          </Styled.WelcomeContainer>
          <Link href="/login" passHref>
            <Styled.LoginAnchor>로그인</Styled.LoginAnchor>
          </Link>
        </Styled.MainContainer>
        <Styled.SubContainer>
          <Styled.AboutPhrase>What is ‘boated’ ?</Styled.AboutPhrase>
          <Styled.BoxWrapper>
            <Styled.Box />
            <Styled.Box />
            <Styled.Box />
          </Styled.BoxWrapper>
        </Styled.SubContainer>
      </Styled.MainSection>
    </Styled.Wrapper>
  );
};

export default LandingPage;
