import styled from 'styled-components';

import { CircleTextProps } from '@/types/size';

import Theme from '@/styles/Theme';

export const Wrapper = styled.div<CircleTextProps>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ backgroundColor }) => backgroundColor};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
`;
