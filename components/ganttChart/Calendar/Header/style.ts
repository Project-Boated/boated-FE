import styled from 'styled-components';

import Theme from '@/styles/Theme';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 1051px;
  height: 38px;

  background-color: ${Theme.S_0};
  border: 1px solid ${Theme.P_1};

  & > :nth-child(2) {
    margin: 0 13px;
  }
`;
