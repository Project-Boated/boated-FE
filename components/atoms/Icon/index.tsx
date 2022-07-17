import React from 'react';
import styled, { css } from 'styled-components';

import * as icons from '@/components/atoms/Icon/Icons';

interface IIconWrapperProps {
  width?: number;
  height?: number;
  rotate?: number;
  isButton?: boolean;
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
    }};
  ${(props) =>
    props.isButton &&
    css`
      cursor: pointer;
    `}
`;

type IconOption = keyof typeof icons;

interface IIconProps extends IIconWrapperProps {
  icon: IconOption;
  color?: string;
}

const Icon = ({ icon, width, height, rotate, isButton = false, ...props }: IIconProps) => {
  const IconComponent = icons[icon];

  return (
    <IconWrapper {...props} width={width} height={height} rotate={rotate} isButton={isButton}>
      <IconComponent {...props} />
    </IconWrapper>
  );
};

export default Icon;
