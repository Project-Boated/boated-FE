import React from 'react';

import { SizeProps, LayoutProps, FontSizeProps } from '@/types/size';

import Theme from '@/styles/Theme';

import * as Styled from './style';

export interface LabelProps extends SizeProps, LayoutProps, FontSizeProps {
  htmlFor: string;
  isRequired?: boolean;
  children: React.ReactChild;
  onClick?: () => void;
}

const Label = ({
  width,
  height,
  borderRadius,
  backgroundColor,
  fontSize = 14,
  fontWeight = 400,
  lineHeight = 20,
  color = Theme.S_5,
  htmlFor,
  isRequired = false,
  children,
  onClick,
}: LabelProps) => {
  return (
    <Styled.Wrapper
      width={width}
      height={height}
      borderRadius={borderRadius}
      backgroundColor={backgroundColor}
      fontSize={fontSize}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
      color={color}
      htmlFor={htmlFor}
      onClick={onClick}
    >
      {children} {isRequired && <span className="is-required">*</span>}
    </Styled.Wrapper>
  );
};

export default Label;
