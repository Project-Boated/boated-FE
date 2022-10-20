import styled from 'styled-components';

import { boxDesign } from '@/styles/common';

export const Container = styled.div`
  position: relative;

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

export const PresentationVideo = styled.video`
  width: 999px;
  height: 488px;
`;

export const VideoInfoContainer = styled.div`
  width: 278px;
  height: 53px;

  padding: 0 12px;

  display: flex;
  align-items: center;

  ${boxDesign()};

  & > span {
    margin-left: 8px;
  }

  & > button {
    margin-left: 20px;
  }
`;

export const LoadingWrapper = styled.div`
  width: 999px;
  height: 488px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  position: relative;

  & > button {
    position: absolute;
    top: 0;
    right: 0;
  }
`;

export const SaveWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
`;
