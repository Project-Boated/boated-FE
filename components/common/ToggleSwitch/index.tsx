import React from 'react';

import { SizeProps } from '@/types/size';
import { WithRequiredProperty } from '@/types/util';

import { Wrapper, Container, InnerContainer, ToggleItem } from './style';

export interface ToggleSwitchProps extends WithRequiredProperty<SizeProps, 'width' | 'height'> {
  leftContent: string;
  rightContent: string;
  isRight: boolean;
  setIsRight: React.Dispatch<React.SetStateAction<boolean>>;
}

const ToggleSwitch = ({ width, height, leftContent, rightContent, isRight, setIsRight }: ToggleSwitchProps) => {
  const onClickToggleSwitch = () => setIsRight((prev: boolean) => !prev);

  return (
    <Wrapper width={width} height={height} onClick={onClickToggleSwitch}>
      <InnerContainer>
        <ToggleItem className={isRight ? 'right' : 'left'}>{leftContent}</ToggleItem>
        <ToggleItem className={isRight ? 'left' : 'right'}>{rightContent}</ToggleItem>
      </InnerContainer>
      <Container className={isRight ? 'right' : ''} width={Math.floor(width / 2)} height={height} isRight={isRight} />
    </Wrapper>
  );
};

export default ToggleSwitch;
