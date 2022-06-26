import React from 'react';

import Theme from '@/styles/Theme';

import { Wrapper } from './style';

export interface TextProps {
  color?: string;
  fontSize?: number;
  fontWeight?: number;
  lineHeight?: number;
  fontFamily?: 'Noto Sans KR' | 'Gmarket Sans';
  hasUnderline?: boolean;
  children: React.ReactText;
}

const Text = ({
  color = Theme.M_1,
  fontSize = 15,
  fontWeight = 400,
  lineHeight = 20,
  fontFamily = 'Noto Sans KR',
  hasUnderline = false,
  children,
}: TextProps) => {
  return (
    <Wrapper
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
      fontFamily={fontFamily}
      hasUnderline={hasUnderline}
    >
      {children}
    </Wrapper>
  );
};

export default Text;
