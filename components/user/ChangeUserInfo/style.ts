import styled from 'styled-components';

import Theme from '@/styles/Theme';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 44px;
`;

export const Container = styled.div`
  width: 1062px;
  height: 382px;

  background: ${Theme.S_0};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  div:nth-child(2) {
    margin: 0;
  }
`;
