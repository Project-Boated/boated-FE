import styled from 'styled-components';

import Theme from '@/styles/Theme';

export const Wrapper = styled.li<{ isFocused: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 238px;
  height: 59px;

  border-radius: 6px;
  background-color: ${({ isFocused }) => (isFocused ? Theme.M_1 : Theme.S_0)};

  font-size: 15px;
  font-weight: 400;
  color: ${({ isFocused }) => (isFocused ? Theme.S_0 : Theme.M_1)};
`;
