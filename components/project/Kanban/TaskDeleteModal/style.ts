import styled from 'styled-components';

import Theme from '@/styles/Theme';

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  line-height: 20px;
`;

export const TextContainer = styled.div`
  position: absolute;
  top: 60px;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 8px;
`;

export const ButtonContainer = styled.div`
  position: absolute;
  bottom: 26px;

  display: flex;

  gap: 35px;
`;
