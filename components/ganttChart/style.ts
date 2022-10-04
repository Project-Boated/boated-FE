import styled from 'styled-components';

import Theme from '@/styles/Theme';

export const Container = styled.section`
  position: relative;

  width: 1051px;
  height: 706px;
`;

export const ProjectListContainer = styled.div`
  width: 339px;

  background-color: ${Theme.P_11};
  box-shadow: 0 0 0 100vmax ${Theme.P_11};

  & > :first-child {
    margin: 23px 0;
  }
`;

export const H2 = styled.h2`
  text-align: center;

  font-size: 14px;
  font-weight: 500;
  font-family: 'Gmarket Sans';
  line-height: 14px;
`;

export const ProjectListWrapper = styled.ol`
  display: grid;
  place-items: center;

  list-style-type: none;

  & > li {
    margin-bottom: 7px;
  }
`;

export const ProjectList = styled.li``;

export const FlexContainer = styled.div`
  position: relative;

  overflow-y: scroll;

  display: flex;

  height: 669px;

  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
`;

export const DateContainer = styled.div`
  position: absolute;
  right: 0;

  display: flex;
  flex-wrap: nowrap;

  overflow-x: scroll;

  width: 710px;

  z-index: 999;
`;
