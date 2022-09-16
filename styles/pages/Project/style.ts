import styled from 'styled-components';

export const MainContainer = styled.main`
  display: flex;
  justify-content: space-between;

  width: 1318px;
  margin: 0 auto;
  margin-top: 128px;

  & > :first-child {
    margin-top: 71px;
  }
`;

export const TabListContainer = styled.ul`
  & > :not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const MainContentsContainer = styled.section`
  & > :first-child {
    margin-bottom: 22px;
  }
`;
