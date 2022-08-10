import React from 'react';
import styled, { css } from 'styled-components';

import * as icons from '@/components/atoms/Icon/Icons';

interface IconWrapperProps {
  width?: number;
  height?: number;
  rotate?: number;
  isButton?: boolean;
  onClick?: () => void;
}

const IconWrapper = styled.div<IconWrapperProps>`
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

interface IconProps extends IconWrapperProps {
  icon: IconOption;
  color?: string; // icon's color
}

const Icon = ({ icon, width, height, rotate, isButton = false, onClick, ...props }: IconProps) => {
  const IconComponent = icons[icon];

  return (
    <IconWrapper {...props} width={width} height={height} rotate={rotate} isButton={isButton} onClick={onClick}>
      <IconComponent {...props} />
    </IconWrapper>
  );
};

export default Icon;
