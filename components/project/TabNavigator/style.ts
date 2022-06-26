import styled from 'styled-components';

import Theme from '@/styles/Theme';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 1056px;
  height: 49px;

  background-color: ${Theme.S_0};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  padding: 0px 5px;
`;

export const TabItem = styled.div<{ isSelected: boolean }>`
  cursor: pointer;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 199px;
  height: 43px;

  background-color: ${({ isSelected }) => isSelected && Theme.M_1};
  border-radius: 8px;
`;

export const TriangleWrapper = styled.div`
  position: absolute;

  top: -20px;
`;
