import styled from 'styled-components';

import Theme from '@/styles/Theme';

export const Wrapper = styled.div`
  width: 1062px;
  height: 478px;
`;

export const TitleContainer = styled.div`
  margin-bottom: 50px;
`;

export const ProjectInviteWrapper = styled.div`
  display: flex;
  align-items: center;

  gap: 10px;

  margin-bottom: 10px;
`;

export const ProjectInviteTitleContainer = styled.div`
  width: 803px;
  height: 59px;

  display: flex;
  align-items: center;

  background: ${Theme.S_0};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
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
