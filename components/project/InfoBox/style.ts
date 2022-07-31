import styled from 'styled-components';

import Theme from '@/styles/Theme';

export const Wrapper = styled.section`
  display: flex;
  align-items: center;

  width: 670px;
  height: 750px;

  background: ${Theme.S_0};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
`;

export const Container = styled.div`
  margin: 0 auto;

  & > :first-child {
    margin-bottom: 42px;

    & > :nth-child(2) {
      margin: 11px 0 0 34px;
    }
  }

  & > :nth-child(2) {
    margin-bottom: 58px;

    & > :nth-child(2) {
      margin: 11px 0 0 34px;
    }
  }

  & > :nth-child(3) {
    & > :nth-child(2) {
      margin: 11px 0 0 34px;
    }
  }
`;

export const Row = styled.div``;
