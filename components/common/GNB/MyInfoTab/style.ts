import styled from 'styled-components';

import { boxDesign } from '@/styles/common';

import Theme from '@/styles/Theme';

export const Container = styled.div`
  position: absolute;

  top: 50px;
  right: 0;

  width: 220px;
  height: 341px;

  background-color: ${Theme.S_0};
  ${boxDesign()};
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 23px;

  cursor: auto;
`;

export const ProfileImage = styled.img`
  box-sizing: border-box;
  width: 72px;
  height: 72px;

  margin-top: 40px;

  background: ${Theme.S_0};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
`;

export const TabContainer = styled.ul`
  margin-top: 13px;
`;

export const TabItem = styled.li`
  position: relative;

  width: 220px;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  :hover {
    background-color: ${Theme.M_1};
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 6px;

    & > span {
      color: ${Theme.S_0};
    }
  }

  & > div {
    position: absolute;

    top: 10px;
    right: 33px;
  }
`;
