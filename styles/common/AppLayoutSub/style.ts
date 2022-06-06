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

  width: 100%;

  bottom: -20vh;
  z-index: -999;
`;

export const BackgroundSeaWave = styled.div`
  display: flex;

  height: 445px;

  background: url('../imgs/SubAppLayoutSeaWave.svg') no-repeat;
  background-size: cover;
`;

export const BackgroundRectangle = styled.div`
  display: flex;

  height: 160px;

  background: url('../imgs/SubAppLayoutRectangle.svg') no-repeat;
  background-size: cover;
`;
