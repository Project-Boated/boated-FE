import styled from 'styled-components';

import Theme from '@/styles/Theme';

export const StyledInput = styled.input<{ width: number; height: number }>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;

  background: ${Theme.S_0};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;

  padding-left: 15px;

  z-index: 999;
`;
