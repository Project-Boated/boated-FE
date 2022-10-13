import React from 'react';

import { SizeProps } from '@/types/size';

import Theme from '@/styles/Theme';


import { Wrapper } from './style';

export interface Props {
  type?: 'button' | 'submit' | 'reset';
  fontColor?: string;
  fontSize?: number;
  fontWeight?: number;
  borderRadius?: number;
  backgroundColor?: string;
  children: React.ReactText;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({
  type = 'button',
  width,
  height,
  fontColor = Theme.S_0,
  fontSize = 13,
  fontWeight = 400,
  borderRadius = 6,
  backgroundColor = Theme.M_1,
  children,
  onClick,
}: SizeProps & Props) => (
    <Wrapper
      type={type}
      width={width}
      height={height}
      fontColor={fontColor}
      fontSize={fontSize}
      fontWeight={fontWeight}
      borderRadius={borderRadius}
      backgroundColor={backgroundColor}
      onClick={onClick}
    >
      {children}
    </Wrapper>
  );

export default Button;
