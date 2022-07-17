import styled from 'styled-components';

import Theme from '@/styles/Theme';
import { SizeProps } from '@/types/size';

export const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 1000;

  background: rgba(3, 14, 32, 0.36);
`;

export const Wrapper = styled.div<SizeProps>`
  position: relative;

  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;

  background: ${Theme.S_0};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 37px;
`;

export const XIconWrapper = styled.div`
  position: absolute;

  cursor: pointer;

  top: 22px;
  right: 33px;
`;
