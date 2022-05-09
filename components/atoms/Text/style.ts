import styled from 'styled-components';

import { TextProps } from '@/components/atoms/Text';

export const Wrapper = styled.span<TextProps>`
  ${({ color, fontSize, fontWeight, lineHeight, fontFamily }) => ({
    color,
    fontSize,
    fontWeight,
    lineHeight,
    fontFamily,
  })}
`;
