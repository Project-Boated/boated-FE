import styled from 'styled-components';

interface WrapperProps {
  width: number;
  backgroundColor: string;
}

export const Wrapper = styled.div<WrapperProps>`
  width: ${({ width }) => width}px;
  height: 32px;

  background-color: ${({ backgroundColor }) => backgroundColor};
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
`;
