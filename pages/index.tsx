import React from 'react';
import type { NextPage } from 'next';
import styled from 'styled-components';
import Link from 'next/link';

import Icon from '@/components/atoms/Icon';

const Wrapper = styled.div``;

const MainSection = styled.section`
  margin-top: 52px;
  height: 400vh;
  background: url('../imgs/LandingPageSVG.svg') no-repeat;
  background-size: cover;
`;

const MainContainer = styled.div`
  position: absolute;
  top: 242px;
  left: 64px;
`;

const WelcomeContainer = styled.div`
  display: flex;
  align-items: flex-end;
`;

const WelcomePhrase = styled.h1`
  font-family: 'Gmarket Sans';
  font-weight: 400;
  font-size: 40px;
`;

const LoginAnchor = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 34px;

  width: 200px;
  height: 52px;

  background: ${({ theme }) => theme.M_1};
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  color: ${({ theme }) => theme.S_0};
  font-size: 13px;

  cursor: pointer;
`;

const SubContainer = styled.div`
  position: absolute;
  top: 1400px;
  left: 350px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AboutPhrase = styled.h2`
  margin-bottom: 117px;

  font-weight: 900;
  font-size: 36px;

  color: ${({ theme }) => theme.S_0};
`;

const BoxWrapper = styled.div`
  display: flex;
`;

const Box = styled.div`
  width: 432px;
  height: 694px;

  background: ${({ theme }) => theme.S_2};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 51px;

  & ~ & {
    margin-left: 53px;
  }
`;

const LandingPage: NextPage = () => (
  <Wrapper>
    <MainSection>
      <MainContainer>
        <WelcomeContainer>
          <WelcomePhrase>Let’s start team projects with</WelcomePhrase>
          <Icon icon="BoatedSignature" width={239} height={70} margin="0 0 0 29px" />
          <Icon icon="ExclamationMark" width={17} height={70} margin="0 0 0 29px" />
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
