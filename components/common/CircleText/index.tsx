import React from 'react';

import Text from '@/components/atoms/Text';

import Theme from '@/styles/Theme';

import * as Styled from './style';

export interface CircleTextProps {
  width?: number;
  height?: number;
  fontSize?: number;
  fontWeight?: number;
  color?: string;
  backgroundColor?: string;
  children: React.ReactNode;
}

const CircleText = ({
  width = 24,
  height = 24,
  fontSize = 10,
  fontWeight = 400,
  color = Theme.S_0,
  backgroundColor = Theme.P_2,
  children,
}: CircleTextProps) => {
  return (
    <Styled.Wrapper width={width} height={height} backgroundColor={backgroundColor}>
      <Text fontSize={fontSize} fontWeight={fontWeight} color={color}>
        {children}
      </Text>
    </Styled.Wrapper>
  );
};

export default CircleText;
