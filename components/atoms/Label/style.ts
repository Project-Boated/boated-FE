import styled, { css } from 'styled-components';

import { SizeProps, LayoutProps, FontSizeProps } from '@/types/size';

import Theme from '@/styles/Theme';

export const Wrapper = styled.label<SizeProps & LayoutProps & FontSizeProps>`
  cursor: pointer;

  display: block;

  ${({ width }) =>
    width &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
    `}

  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;

  border-radius: ${({ borderRadius }) => borderRadius}px;
  background-color: ${({ backgroundColor }) => backgroundColor};

  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize}px;
  font-weight: ${({ fontWeight }) => fontWeight};
  line-height: ${({ lineHeight }) => lineHeight}px;

  .is-required {
    color: ${Theme.W_1};
  }
`;
