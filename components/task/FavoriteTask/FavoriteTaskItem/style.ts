import styled from 'styled-components';

import { boxDesign } from '@/styles/common';

import Theme from '@/styles/Theme';

export const Container = styled.div`
  width: 1033px;
  height: 65px;

  display: flex;
  align-items: center;

  ${boxDesign(8)}
`;

export const ProjectNameWrapper = styled.div`
  box-sizing: border-box;

  padding: 0 22px;

  display: flex;
  align-items: center;

  border-right: 1px solid ${Theme.S_2};

  width: 202px;
  height: 65px;

  & > span {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;

export const TaskNameWrapper = styled.div`
  box-sizing: border-box;

  padding: 0 22px;

  display: flex;
  align-items: center;

  border-right: 1px solid ${Theme.S_2};

  width: 320px;
  height: 65px;

  & > span {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;

export const DdayWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-right: 1px solid ${Theme.S_2};

  gap: 5px;

  width: 147px;
  height: 65px;
`;

export const TeammatesWrapper = styled.div`
  box-sizing: border-box;

  padding: 0 18px;

  display: flex;
  align-items: center;

  gap: 6px;

  width: 351px;
  height: 65px;

  & > span {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;

export const AssignedAccountImg = styled.img`
  width: 30px;
  height: 30px;

  border-radius: 50%;
`;
