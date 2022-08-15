import styled from 'styled-components';

import Theme from '@/styles/Theme';

export const Container = styled.div`
  width: 173px;
  height: 241px;

  background-color: ${Theme.S_0};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;

  padding-top: 17px;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 138px;

  margin: 0 auto;
`;

export const MonthSelectorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 10px 0 17px 0;

  width: inherit;
`;

export const IconWrapper = styled.div`
  cursor: pointer;
`;

export const Table = styled.table`
  width: inherit;

  tr:not(:last-child) {
    margin-bottom: 4px;
  }
`;

export const WeekListContainer = styled.tr`
  display: flex;
  justify-content: space-between;

  width: inherit;

  span {
    display: flex;
    justify-content: center;

    min-width: 10px;
  }
`;

export const DateWrapper = styled.td`
  cursor: pointer;

  display: flex;
  justify-content: center;

  min-width: 10px;
`;
