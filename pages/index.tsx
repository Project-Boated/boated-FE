import React from 'react';

import type { NextPage } from 'next';
import Link from 'next/link';

import Icon from '@/components/atoms/Icon';
import GNB from '@/components/common/GNB';

import {
  AboutPhrase,
  Box,
  BoxWrapper,
  IconWrapper,
  LoginAnchor,
  MainContainer,
  MainSection,
  SubContainer,
  WelcomeContainer,
  WelcomePhrase,
  Wrapper,
} from '@/styles/pages/LandingPage/style';

const LandingPage: NextPage = () => (
  <Wrapper>
    <GNB />
    <MainSection>
      <MainContainer>
        <WelcomeContainer>
          <WelcomePhrase>Let’s start team projects with</WelcomePhrase>
          <IconWrapper>
            <Icon icon="BoatedSignature" width={239} height={70} />
          </IconWrapper>
          <IconWrapper>
            <Icon icon="ExclamationMark" width={17} height={70} />
          </IconWrapper>
        </WelcomeContainer>
        <Link href="/login">
          <LoginAnchor>로그인</LoginAnchor>
        </Link>
      </MainContainer>
      <SubContainer>
        <AboutPhrase>What is ‘boated’ ?</AboutPhrase>
        <BoxWrapper>
          <Box />
          <Box />
          <Box />
        </BoxWrapper>
      </SubContainer>
    </MainSection>
  </Wrapper>
);

export default LandingPage;
