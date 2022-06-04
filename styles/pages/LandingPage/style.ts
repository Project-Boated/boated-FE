import styled from 'styled-components';

export const Wrapper = styled.div``;

export const MainSection = styled.section`
  position: absolute;
  margin-top: 52px;
  width: 100%;
  height: 400vh;

  background: url('../imgs/LandingPageSVG.svg') no-repeat;
  background-size: cover;
`;

export const MainContainer = styled.div`
  margin: 137px 0 0 46px;
`;

export const WelcomeContainer = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const WelcomePhrase = styled.h1`
  font-family: 'Gmarket Sans';
  font-weight: 400;
  font-size: 40px;
`;

export const IconWrapper = styled.div`
  margin-left: 29px;
`;

export const LoginAnchor = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 34px;

  width: 200px;
  height: 52px;

  background: ${({ theme }) => theme.M_1};
  color: ${({ theme }) => theme.S_0};
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  font-size: 13px;

  cursor: pointer;
`;

export const SubContainer = styled.div`
  margin: 100vh auto 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AboutPhrase = styled.h2`
  margin-bottom: 117px;

  font-weight: 900;
  font-size: 36px;

  color: ${({ theme }) => theme.S_0};
`;

export const BoxWrapper = styled.div`
  display: flex;
`;

export const Box = styled.div`
  width: 432px;
  height: 694px;

  background: ${({ theme }) => theme.S_2};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 51px;

  & ~ & {
    margin-left: 53px;
  }
`;
