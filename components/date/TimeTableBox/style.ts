import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  width: 357px;
  height: 290px;
`;

export const SelectorContainer = styled.div`
  & > :first-child {
    margin-bottom: 8px;
  }
`;
