import styled from 'styled-components';

import { boxDesign } from '@/styles/common';

export const Container = styled.aside`
  width: 238px;
  height: 835px;

  & > :nth-child(2) {
    margin: 8px 0 18px 0;
  }
`;

export const ProjectProfileContainer = styled.div`
  width: inherit;
  height: 150px;

  ${boxDesign()}
`;
