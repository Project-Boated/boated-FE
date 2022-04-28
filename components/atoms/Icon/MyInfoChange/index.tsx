import React from 'react';

import Icon from '@/components/atoms/Icon';

import {
  DeleteAccount,
  NicknameInput,
  NicknameInputWrapper,
  NicknameTitle,
  NicknameWarningText,
  ProfileChangeWrapper,
  ProfileImage,
  ProfileImageText,
  SeaIconWrapper,
  SettingIconWrapper,
  SubmitButton,
  Wrapper,
} from './style';

const MyInfoChange = () => {
  return (
    <Wrapper>
      <SeaIconWrapper>
        <Icon icon="SeaWaveMedium" width={916} height={586} />
      </SeaIconWrapper>
      <ProfileChangeWrapper>
        <ProfileImage />
        <SettingIconWrapper>
          <Icon icon="Setting" width={30} height={30} />
        </SettingIconWrapper>
        <ProfileImageText>프로필 이미지</ProfileImageText>
        <NicknameInputWrapper>
          <NicknameTitle>닉네임</NicknameTitle>
          <NicknameInput />
        </NicknameInputWrapper>
        <NicknameWarningText>*이미 존재하는 닉네임이에요!</NicknameWarningText>
        <SubmitButton>저장하기</SubmitButton>
      </ProfileChangeWrapper>
      <DeleteAccount>탈퇴하기</DeleteAccount>
    </Wrapper>
  );
};

export default MyInfoChange;
