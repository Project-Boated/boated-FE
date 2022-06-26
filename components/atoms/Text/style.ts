import styled from 'styled-components';

import { TextProps } from '@/components/atoms/Text';

export const Wrapper = styled.span<TextProps>`
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize}px;
  font-weight: ${({ fontWeight }) => fontWeight};
  line-height: ${({ lineHeight }) => lineHeight}px;
  font-family: ${({ fontFamily }) => fontFamily};

  text-decoration-line: ${({ hasUnderline }) => hasUnderline && 'underline'};
`;
