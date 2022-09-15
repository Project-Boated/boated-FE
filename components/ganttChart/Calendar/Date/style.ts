import styled from 'styled-components';

import Theme from '@/styles/Theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;

  width: 51px;
  height: 53px;

  background-color: ${Theme.S_0};
  border-right: 1px solid ${Theme.S_2};
  border-bottom: 1px solid ${Theme.S_2};
`;
