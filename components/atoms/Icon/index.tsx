import React from 'react';

import * as icons from '@/components/atoms/Icon/Icons';

import styled, { css } from 'styled-components';

interface IIconWrapperProps {
  width?: number;
  height?: number;
}

const IconWrapper = styled.div<IIconWrapperProps>`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;

type IconOption = keyof typeof icons;

interface IIconProps {
  icon: IconOption;
  width?: number;
  height?: number;
}

const Icon = ({ icon, width, height, ...props }: IIconProps) => {
  const IconComponent = icons[icon];

  return (
    <IconWrapper {...props} width={width || 24} height={height || 24}>
      <IconComponent {...props} />
    </IconWrapper>
  );
};

export default Icon;
