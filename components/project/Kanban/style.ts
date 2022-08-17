import styled from 'styled-components';

import Theme from '@/styles/Theme';

export const Container = styled.div``;

export const KanbanWrapper = styled.div`
  width: 1045px;
  max-width: 1045px;

  overflow-x: auto;
`;

export const ColumnWrapper = styled.div`
  display: flex;

  gap: 20px;
`;

export const TaskTextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 20px;
`;

export const ColumnAddContainer = styled.div`
  box-sizing: border-box;

  width: 126px;
  height: 33px;

  padding: 7px 2px 7px 12px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: ${Theme.S_0};
  border: 1px solid ${Theme.M_1};
  border-radius: 17.5px;

  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  margin-top: 28px;

  float: right;
`;
