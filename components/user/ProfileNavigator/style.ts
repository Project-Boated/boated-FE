import styled from 'styled-components';

import Theme from '@/styles/Theme';

export const Wrapper = styled.div`
  width: 238px;
  height: 285px;

  background: ${Theme.S_0};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
`;

export const TabItem = styled.div<{ isSelected: boolean }>`
  width: 238px;
  height: 59px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${({ isSelected }) => (isSelected ? Theme.M_1 : Theme.S_0)};
  color: ${({ isSelected }) => (isSelected ? Theme.S_0 : Theme.M_1)};
  border-radius: 6px;

  transition: all 0.2s;

  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;

  cursor: pointer;
`;
