import React from 'react';

import Icon from '@/components/atoms/Icon';

import * as Styled from './styled';

interface ModalProps {
  children: React.ReactNode;
  width?: number;
  height?: number;
}

const Modal = ({ children, width = 729, height = 258 }: ModalProps) => {
  return (
    <Styled.Background>
      <Styled.Wrapper width={width} height={height}>
        <Styled.XIconWrapper>
          <Icon icon="XIcon" />
        </Styled.XIconWrapper>
        {children}
      </Styled.Wrapper>
    </Styled.Background>
  );
};

export default Modal;
