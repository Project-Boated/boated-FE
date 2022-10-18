import styled, { css } from 'styled-components';

import { boxDesign } from '@/styles/common';

import Theme from '@/styles/Theme';

export const LoadingWrapper = styled.div`
  width: 999px;
  height: 488px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div<{ isDragging: boolean }>`
  position: relative;

  overflow: hidden;

  width: 999px;
  height: 488px;

  display: flex;
  justify-content: center;
  align-items: center;

  ${boxDesign()};

  ${({ isDragging }) =>
    isDragging &&
    css`
      background-color: #94b0dc61;
      border: 1px dashed ${Theme.P_6};
    `}
`;

export const FileInput = styled.input`
  display: none;
`;

export const ButtonLabel = styled.label`
  width: 124px;
  height: 32px;

  background: ${Theme.M_1};
  border-radius: 26px;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FileUploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 11px;
`;

export const IconWrapper = styled.div`
  position: absolute;

  bottom: -55px;
  left: -20px;

  transform: rotate(-7.55deg);
`;
