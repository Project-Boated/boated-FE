import styled from 'styled-components';

import { SizeProps } from '@/types/size';

import { boxDesign } from '@/styles/common';

export const Background = styled.div`
  position: fixed;

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

export const Overlay = styled.div`
  position: absolute;

  width: 100%;
  height: 100%;
`;

export const Container = styled.div<SizeProps>`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;

  ${({ borderRadius }) => boxDesign(borderRadius)};
`;

export const XIconWrapper = styled.div`
  position: absolute;

  cursor: pointer;

  top: 22px;
  right: 33px;
`;
