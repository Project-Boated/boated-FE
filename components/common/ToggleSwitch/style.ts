import styled from 'styled-components';

import Theme from '@/styles/Theme';

import { SizeProps } from '@/types/size';

interface ClickedProps {
  isRight: boolean;
}

export const Wrapper = styled.div<SizeProps>`
  cursor: pointer;

  position: relative;

  display: flex;
  align-items: center;

  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;

  background: ${Theme.S_0};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`;

export const Container = styled.div<SizeProps & ClickedProps>`
  position: absolute;

  z-index: 0;

  display: flex;
  justify-content: center;

  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;

  border-radius: 20px;
  background: ${Theme.M_1};

  transition: all 0.7s;

  &.right {
    margin-left: ${({ width }) => width}px;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 70%;

  margin: 0 auto;
`;

export const ToggleItem = styled.div`
  z-index: 1;

  &.left {
    color: ${Theme.S_0};
  }

  &.right {
    color: ${Theme.M_1};
  }
  transition: all 0.7s;
`;
