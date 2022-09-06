import styled from 'styled-components';

import { boxDesign } from '@/styles/common';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: 16px;
`;

export const PresentationContainer = styled.section`
  width: 1061px;
  height: 754px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 35px;

  ${boxDesign()};
`;

export const H1 = styled.h1`
  font-size: 20px;
  line-height: 28px;
`;
