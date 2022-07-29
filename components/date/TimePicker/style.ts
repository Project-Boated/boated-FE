import styled from 'styled-components';

import Theme from '@/styles/Theme';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 173px;
  height: 78px;

  background: ${Theme.S_0};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
`;

export const InnerContainer = styled.div`
  display: flex;
  width: 152px;
  height: 56px;

  & > :nth-child(2) {
    margin: 0 11px 0 7px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: inherit;
`;
