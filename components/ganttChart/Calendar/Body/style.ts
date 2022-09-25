import styled from 'styled-components';

import Theme from '@/styles/Theme';

export const Container = styled.section<{ height: number }>`
  position: relative;

  overflow-x: scroll;

  height: ${({ height }) => height}px;

  background-color: white;

  border-left: 2px solid ${Theme.P_1};
`;

export const GridContainer = styled.div`
  position: relative;

  display: flex;

  width: 710px;
  height: inherit;

  overflow-y: visible;
`;

export const GridItem = styled.div`
  flex: 0 0 auto;

  width: 51px;
  min-height: inherit;

  border-right: 1px solid ${Theme.S_2};

  & > div {
    position: sticky;
    top: 0;

    z-index: 999;
  }
`;

export const GanttContainer = styled.div<{ width: number }>`
  position: absolute;
  top: 0;

  margin-top: 45px;

  height: inherit - 45px;
`;

export const GanttWrapper = styled.div<{ left: number }>`
  position: relative;
  left: ${({ left }) => left}px;

  margin-top: 30px;

  & > :not(:last-child) {
    margin-bottom: 30px;
  }
`;

export const TaskWrapper = styled.div<{ left: number }>`
  position: relative;
  left: ${({ left }) => left}px;
`;
