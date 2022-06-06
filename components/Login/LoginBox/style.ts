import styled from 'styled-components';

import Theme from '@/styles/Theme';

export const Wrapper = styled.div`
  position: relative;

  width: 1003px;
  height: 582px;

  background: ${Theme.S_0};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 51px;
`;

export const SeaWaveWrapper = styled.div`
  height: 0;

  svg {
    position: absolute;
    top: -4px;
    left: -4px;
  }
`;

export const Container = styled.div`
  position: absolute;
  left: 600px;
  top: 143px;

  display: flex;
  flex-direction: column;
  align-items: center;

  height: 339px;

  & > :nth-child(3) {
    margin: 91px 0 25px 0;
  }
`;

export const Text = styled.span`
  font-family: 'Gmarket Sans';

  color: ${Theme.M_1};
  font-size: 20px;
  font-weight: 300;
  line-height: 20px;

  text-align: center;
`;
