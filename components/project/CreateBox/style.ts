import styled from 'styled-components';

import Theme from '@/styles/Theme';

export const Wrapper = styled.div`
  position: relative;

  display: flex;

  width: 1137px;
  height: 582px;

  background: ${Theme.S_0};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 51px;
`;

export const SeaWaveWrapper = styled.div`
  display: flex;

  height: 0;

  svg {
    position: absolute;
    top: -4px;
    left: -3px;
  }
`;

export const LeftContainer = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 500px;
  height: 95%;

  & > :not(:nth-child(2)) {
    position: absolute;
  }

  & > :nth-child(3) {
    margin-bottom: 60px;
  }

  & > span {
    font-family: 'Gmarket Sans';
    color: ${Theme.M_1};
    font-size: 18px;
    line-height: 18px;
    font-weight: 300;

    margin-top: 70px;
  }
`;

export const RightContainer = styled.div`
  width: 566px;
`;
