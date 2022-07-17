import styled from 'styled-components';

import Theme from '@/styles/Theme';

export const Container = styled.div`
  cursor: pointer;

  display: flex;
  align-items: center;

  width: 173px;
  height: 43px;

  padding: 0 11px;

  background-color: ${Theme.S_0};
  border: 1px solid ${Theme.M_2};
  border-radius: 6px;
`;

export const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 71px;

  margin: 0 44px 0 8px;
`;
