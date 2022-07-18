import React from 'react';

import Icon from '@/components/atoms/Icon';

import * as Styled from './style';

interface ModalProps {
  children: React.ReactNode;
  width?: number;
  height?: number;
}

const Modal = ({ children, width = 729, height = 258 }: ModalProps) => {
  return (
    <Styled.Background>
      <Styled.Container width={width} height={height}>
        <Styled.XIconWrapper>
          <Icon icon="X" />
        </Styled.XIconWrapper>
        {children}
      </Styled.Container>
    </Styled.Background>
  );
};

export default Modal;
