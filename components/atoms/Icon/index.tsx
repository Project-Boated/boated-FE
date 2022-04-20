import React from 'react';

import * as icons from '@/components/atoms/Icon/Icons';

import styled, { css } from 'styled-components';

interface IIconWrapperProps {
  width?: number;
  height?: number;
  margin?: string;
}

const IconWrapper = styled.div<IIconWrapperProps>`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  margin: ${(props) => props.margin};
`;

type IconOption = keyof typeof icons;

interface IIconProps {
  icon: IconOption;
  width?: number;
  height?: number;
  margin?: string;
}

const Icon = ({ icon, width, height, margin, ...props }: IIconProps) => {
  const IconComponent = icons[icon];

  return (
    <IconWrapper {...props} width={width || 24} height={height || 24} margin={margin}>
      <IconComponent {...props} />
    </IconWrapper>
  );
};

export default Icon;
