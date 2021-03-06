import styled from 'styled-components';

export const Wrapper = styled.div``;

export const ChildrenContainer = styled.div<{ height?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: ${({ height }) => height};
`;

export const BackgroundContainer = styled.div<{ bottom: string }>`
  position: absolute;

  width: 100%;

  bottom: ${({ bottom }) => bottom};
  z-index: -999;
`;
