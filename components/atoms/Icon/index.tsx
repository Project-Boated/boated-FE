import React from 'react';
import styled, { css } from 'styled-components';

import * as icons from '@/components/atoms/Icon/Icons';

interface IIconWrapperProps {
  width?: number;
  height?: number;
  rotate?: number;
}

const IconWrapper = styled.div<IIconWrapperProps>`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;

  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;

  ${(props) =>
    props.rotate && {
      transform: `rotate(${props.rotate}deg)`,
    }}
`;

type IconOption = keyof typeof icons;

interface IIconProps {
  icon: IconOption;
  width?: number;
  height?: number;
  rotate?: number;
}

const Icon = ({ icon, width, height, rotate, ...props }: IIconProps) => {
  const IconComponent = icons[icon];

  return (
    <IconWrapper {...props} width={width || 24} height={height || 24} rotate={rotate}>
      <IconComponent {...props} />
    </IconWrapper>
  );
};

export default Icon;
