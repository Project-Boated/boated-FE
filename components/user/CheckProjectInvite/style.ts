import styled from 'styled-components';

import { boxDesign } from '@/styles/common';

export const Container = styled.div`
  width: 1062px;
  height: 478px;
`;

export const TitleWrapper = styled.div`
  margin-bottom: 50px;
`;

export const ProjectInviteContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 10px;

  margin-bottom: 10px;
`;

export const ProjectInviteTitleContainer = styled.div`
  width: 803px;
  height: 59px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  ${boxDesign()}
`;

export const IconNameContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const BoatedCircle = styled.div`
  width: 36px;
  height: 36px;

  margin: 0 32px;

  border-radius: 50%;

  background: url('../../../imgs/defaultProfileImg.png') no-repeat;
  background-size: cover;

  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
`;

export const CaptainContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 8px;

  margin-right: 13px;
`;

export const CaptainNameBox = styled.div`
  box-sizing: border-box;

  width: 175px;
  height: 35px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 5px 3px 5px 13px;

  ${boxDesign()}
`;
