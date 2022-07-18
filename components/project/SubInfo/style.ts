import styled from 'styled-components';

import { boxDesign } from '@/styles/common';

export const Container = styled.div`
  display: flex;
  align-items: center;

  padding-left: 17px;

  width: 298px;
  height: 53px;

  ${boxDesign()}

  & > :first-child {
    margin-right: 9px;
  }
`;
