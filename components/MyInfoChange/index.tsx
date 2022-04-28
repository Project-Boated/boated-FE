import React, { ChangeEvent, useEffect, useState } from 'react';
import { AxiosError } from 'axios';

import { isNicknameDuplicated } from '@/src/lib/api/user';

import useDebounce from '@/src/hooks/useDebounce';

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
  const [nickname, setNickname] = useState<string>('');
  const [isDuplicated, setIsDuplicated] = useState<boolean>(false);
  const [profileImage, setProfileImage] = useState<string>();

  const debounceNickname = useDebounce<string>(nickname, 500);

  const onChangeNickname = (e: ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const checkNicknameDuplicated = async (nickname: string) => {
    if (nickname === '') {
      return;
    }

    try {
      const res = await isNicknameDuplicated(nickname);
      if (res.duplicated) {
        setIsDuplicated(true);
        return;
      }
      setIsDuplicated(false);
    } catch (e: unknown) {
      const error = e as AxiosError;
      alert(JSON.stringify(error.response?.data.message));
    }
  };

  useEffect(() => {
    checkNicknameDuplicated(debounceNickname);
  }, [debounceNickname]);

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
          <NicknameInput value={nickname} onChange={onChangeNickname} />
        </NicknameInputWrapper>
        <NicknameWarningText isDuplicated={isDuplicated}>*이미 존재하는 닉네임이에요!</NicknameWarningText>
        <SubmitButton type="submit">저장하기</SubmitButton>
      </ProfileChangeWrapper>
      <DeleteAccount>탈퇴하기</DeleteAccount>
    </Wrapper>
  );
};

export default MyInfoChange;
