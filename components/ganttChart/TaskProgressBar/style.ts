import styled from 'styled-components';

import Theme from '@/styles/Theme';

interface BarProps {
  width: number;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Bar = styled.div<BarProps>`
  width: ${({ width }) => width}px;
  height: 0px;

  border: 2px solid ${Theme.M_2};
`;

export const Circle = styled.div`
  width: 12px;
  height: 12px;

  border-radius: 50%;
  background-color: ${Theme.M_2};
`;
