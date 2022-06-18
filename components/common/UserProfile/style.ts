import styled from 'styled-components';

import Theme from '@/styles/Theme';

export const UserProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileImage = styled.img`
  box-sizing: border-box;
  width: 146px;
  height: 146px;

  background: ${Theme.S_0};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
`;

export const SettingIconLabel = styled.label`
  position: relative;

  top: -30px;
  left: 50px;

  cursor: pointer;
`;

export const ImageInput = styled.input`
  display: none;
`;

export const TextWrapper = styled.div`
  margin-top: 30px;
`;
