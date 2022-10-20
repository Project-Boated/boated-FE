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

export const DescriptionTextarea = styled.textarea`
  width: 999px;
  height: 139px;

  resize: none;

  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  font-family: 'Noto Sans KR';

  ${boxDesign()};
`;
