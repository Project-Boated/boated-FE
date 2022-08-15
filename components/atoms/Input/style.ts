import styled from 'styled-components';

import { boxDesign } from '@/styles/common';

export const Wrapper = styled.input<{ width: number; height: number }>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;

  padding-left: 15px;

  z-index: 999;

  ${boxDesign()}
`;
