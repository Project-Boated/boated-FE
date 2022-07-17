import styled from 'styled-components';

import { SizeProps } from '@/types/size';

import Theme from '@/styles/Theme';

const Textarea = styled.textarea<SizeProps>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;

  border: none;
  background: ${Theme.S_0};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;

  outline: none;
  resize: none;

  padding: 7px 15px 0 15px;
`;

export default Textarea;
