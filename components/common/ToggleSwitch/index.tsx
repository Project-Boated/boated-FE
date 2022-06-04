import React from 'react';

import { SizeProps } from '@/types/size';

import { Wrapper, Container, InnerContainer, ToggleItem } from './style';

export interface Props {
  leftContent: string;
  rightContent: string;
  isRight: boolean;
  setIsRight: React.Dispatch<React.SetStateAction<boolean>>;
}

const ToggleSwitch = ({ width, height, leftContent, rightContent, isRight, setIsRight }: SizeProps & Props) => {
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
