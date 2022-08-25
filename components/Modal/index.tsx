import React from 'react';

import Icon from '@/components/atoms/Icon';

import * as Styled from './style';

interface ModalProps {
  children: React.ReactNode;
  width?: number;
  height?: number;
  borderRadius?: number;
  closeModal: () => void;
}

const Modal = ({ children, width = 729, height = 258, borderRadius = 37, closeModal }: ModalProps) => {
  return (
    <Styled.Background>
      <Styled.Overlay onClick={closeModal} />
      <Styled.Container width={width} height={height} borderRadius={borderRadius}>
        <Styled.XIconWrapper onClick={closeModal}>
          <Icon icon="X" />
        </Styled.XIconWrapper>
        {children}
      </Styled.Container>
    </Styled.Background>
  );
};

export default Modal;
