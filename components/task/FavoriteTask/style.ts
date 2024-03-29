import styled from 'styled-components';

import Theme from '@/styles/Theme';

export const Container = styled.table``;

export const HeaderWrapper = styled.thead``;

export const HeaderTr = styled.tr`
  width: 1056px;
  height: 38px;

  display: flex;
  align-items: center;

  border: 1px solid ${Theme.P_1};
  border-right: none;

  & > th {
    box-sizing: border-box;

    display: flex;
    align-items: center;
    justify-content: center;

    border-right: 1px solid ${Theme.P_1};

    height: 38px;
  }

  & > th:first-child {
    width: 211px;
  }

  & > th:nth-child(2) {
    width: 321px;
  }
  & > th:nth-child(3) {
    width: 148px;
  }
  & > th:last-child {
    width: 374px;
  }
`;

export const BodyWrapper = styled.tbody`
  background-color: ${Theme.P_11};

  width: 1056px;
  height: 795px;
  max-height: 795px;

  border-radius: 0px 0px 6px 6px;
`;

export const BodyContainer = styled.tr`
  box-sizing: border-box;

  padding: 8px 0;

  max-height: 795px;
  overflow-y: auto;

  gap: 8px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
