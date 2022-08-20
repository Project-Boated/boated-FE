import React from 'react';

import Text from '@/components/atoms/Text';

import Theme from '@/styles/Theme';

import * as Styled from './style';

export interface BlueCircleTextProps {
  width?: number;
  height?: number;
  fontSize?: number;
  fontWeight?: number;
  color?: string;
  children: React.ReactNode;
}

const BlueCircleText = ({
  width = 24,
  height = 24,
  fontSize = 10,
  fontWeight = 400,
  color = Theme.S_0,
  children,
}: BlueCircleTextProps) => {
  return (
    <Styled.Wrapper width={width} height={height}>
      <Text fontSize={fontSize} fontWeight={fontWeight} color={color}>
        {children}
      </Text>
    </Styled.Wrapper>
  );
};

export default BlueCircleText;
