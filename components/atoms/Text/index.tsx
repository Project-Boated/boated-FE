import React from 'react';

import Theme from '@/styles/Theme';

import { Wrapper } from './style';

export interface TextProps {
  color?: string;
  fontSize?: number;
  fontWeight?: number;
  lineHeight?: number;
  fontFamily?: 'Noto Sans KR' | 'Gmarket Sans';
  children: React.ReactText;
}

const Text = ({
  color = Theme.M_1,
  fontSize = 15,
  fontWeight = 400,
  lineHeight = 20,
  fontFamily = 'Noto Sans KR',
  children,
}: TextProps) => {
  return (
    <Wrapper color={color} fontSize={fontSize} fontWeight={fontWeight} lineHeight={lineHeight} fontFamily={fontFamily}>
      {children}
    </Wrapper>
  );
};

export default Text;
