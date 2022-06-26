import styled from 'styled-components';

import Theme from '@/styles/Theme';

interface ContainerProps {
  dday: number;
  percentage: number;
}

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  width: 1020px;
  border-radius: 8px;

  & > :first-child {
    margin-right: 15px;
  }
`;

export const Container = styled.div<ContainerProps>`
  width: ${({ percentage }) => percentage}%;
  height: 6px;

  background-color: ${({ dday }) => (dday === 1 ? Theme.W_1 : Theme.M_1)};
  border-radius: 8px;

  transition: all 0.5s;
`;
