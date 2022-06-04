import styled from 'styled-components';

export const Wrapper = styled.div``;

export const ChildrenContainer = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BackgroundContainer = styled.div`
  position: absolute;
  bottom: 0;
  z-index: -999;
`;

export const BackgroundSeaWave = styled.img`
  display: flex;
  max-width: 100%;
`;

export const BackgroundRectangle = styled.img`
  display: flex;
  max-width: 100%;
`;
