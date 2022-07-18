import styled from 'styled-components';

import { boxDesign } from '@/styles/common';

export const Container = styled.div`
  position: relative;

  display: flex;

  width: 370px;
  height: 700px;

  ${boxDesign()}
`;

export const InnerContainer = styled.div`
  margin-left: 21px;

  & > :first-child {
    margin: 41px 0 45px 0;
  }
`;

export const CaptainContainer = styled.div`
  & > :first-child {
    margin-bottom: 13px;
  }
`;

export const CrewContainer = styled.div`
  & > :first-child {
    margin-bottom: 14px;
  }
`;

export const CrewInfoTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CrewList = styled.ul`
  margin-left: 35px;

  & > li {
    margin-bottom: 6px;
  }
`;

export const CrewItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 280px;
  height: 29px;

  padding: 0 10px;

  ${boxDesign()};
`;
