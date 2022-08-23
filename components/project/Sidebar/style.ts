import styled from 'styled-components';

import Theme from '@/styles/Theme';
import { boxDesign } from '@/styles/common';

export const Container = styled.aside`
  width: 238px;
  height: 835px;

  & > :nth-child(2) {
    margin: 8px 0 18px 0;
  }
`;

export const ProjectProfileContainer = styled.div`
  width: inherit;
  height: 150px;

  ${boxDesign()}
`;

export const SideTab = styled.ul`
  width: inherit;
  height: 333px;

  ${boxDesign()}
`;

export const Tab = styled.li<{ isClicked: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: inherit;
  height: 59px;

  border-radius: 6px;
  background-color: ${({ isClicked }) => (isClicked ? Theme.M_1 : Theme.S_0)};

  font-size: 15px;
  font-weight: 400;
  color: ${({ isClicked }) => (isClicked ? Theme.S_0 : Theme.M_1)};
`;

export const CalendarWrapper = styled.div`
  width: inherit;
  height: 326px;

  ${boxDesign()}
`;
