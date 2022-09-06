import styled from 'styled-components';

import { boxDesign } from '@/styles/common';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: 15px;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 15px;
`;

export const DescriptionTextarea = styled.div`
  width: 999px;
  height: 139px;

  ${boxDesign()};
`;
