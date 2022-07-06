import styled from 'styled-components';

import { Props } from '@/components/atoms/Button';

import { SizeProps } from '@/types/size';

export const Wrapper = styled.button<SizeProps & Props>`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;

  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);

  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;

  color: ${({ fontColor }) => fontColor};
  font-size: ${({ fontSize }) => fontSize}px;
  font-weight: ${({ fontWeight }) => fontWeight};

  border-radius: ${({ borderRadius }) => borderRadius}px;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;
