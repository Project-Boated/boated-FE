import styled from 'styled-components';

import { boxDesign } from '@/styles/common';

import Theme from '@/styles/Theme';

export const ProjectBoxContainer = styled.ul`
  position: absolute;

  top: 45px;
  left: -30px;

  min-width: 271px;
  max-width: 271px;
  min-height: 147px;

  ${boxDesign()};
`;

export const ItemContainer = styled.div`
  margin-bottom: 2px;
`;

export const ItemWrapper = styled.div`
  height: 56px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  border-bottom: 1px solid ${Theme.S_2};

  cursor: pointer;

  :hover {
    ${boxDesign()}

    & > li {
      border-left: none;
    }
    & > li > span {
      color: ${Theme.S_0};
    }
    background: ${Theme.M_1};
  }
`;

export const Item = styled.li`
  box-sizing: border-box;

  height: 28px;
  padding-left: 14px;

  display: flex;
  align-items: center;

  border-left: 3px solid ${Theme.M_2};
`;

export const MyProjectContainer = styled.div`
  border-top: 1px solid ${Theme.S_2};
`;

export const MyProjectTextWrapper = styled.div`
  box-sizing: border-box;

  padding-left: 20px;

  display: flex;
  align-items: center;

  height: 30px;
`;

export const MyProjectListItem = styled.li`
  box-sizing: border-box;

  width: 271px;
  height: 103px;

  padding-left: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  ${boxDesign()}

  cursor: pointer;

  :hover {
    & > span {
      color: ${Theme.S_0};
    }
    & > div > span {
      color: ${Theme.S_0};
    }
    background: ${Theme.M_1};
  }
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 5px;
`;
