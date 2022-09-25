import styled from 'styled-components';

import { boxDesign } from '@/styles/common';

export const Container = styled.div``;

export const TriggerWrapper = styled.div`
  cursor: pointer;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 330px;
  height: 54px;

  ${boxDesign()};

  & > :nth-child(2) {
    position: absolute;
    right: 15px;
  }
`;

export const TaskListContainer = styled.div`
  margin: 10px;
`;

export const TaskContainer = styled.div`
  position: relative;
  display: flex;

  & > :nth-child(2) {
    position: absolute;
    top: 20px;
    left: 47px;
  }
`;
