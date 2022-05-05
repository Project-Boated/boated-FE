import React, { ChangeEvent, useEffect, useState } from 'react';
import { AxiosError } from 'axios';

import {
  getMe,
  getProfileImg,
  isNicknameDuplicated,
  patchProfile,
  putProfileImg,
  putProfileNickname,
} from '@/lib/api/user';

import { User } from '@/lib/types/user';

import useDebounce from '@/hooks/useDebounce';

import Icon from '@/components/atoms/Icon';

import {
  ImageInput,
  DeleteAccount,
  NicknameInput,
  NicknameInputWrapper,
  NicknameTitle,
  NicknameWarningText,
  ProfileChangeWrapper,
  ProfileImage,
  ProfileImageText,
  SeaIconWrapper,
  SettingIconLabel,
  SubmitButton,
  Wrapper,
} from './style';

const MyInfoChange = () => {
  const [nickname, setNickname] = useState<string>('');
  const [profileImageUrl, setProfileImageUrl] = useState<string>('');
  const [isDuplicated, setIsDuplicated] = useState<boolean>(false);

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

  const onChangeImg = async (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files) {
      const formData = new FormData();
      const image = files[0];

      try {
        formData.append('image', image);
        const imageUrl = await putProfileImg(formData);
        console.log(imageUrl);
        setProfileImageUrl(imageUrl);
      } catch (error) {
        alert('오류가 발생했습니다. 다른 사진을 시도해주세요.');
      }
    }
  };

  const fetchMe = async () => {
    try {
      const profile = await getMe();
      console.log(profile);
      return profile;
    } catch (e: unknown) {
      const error = e as AxiosError;
      alert(JSON.stringify(error.response?.data.message));
    }
  };

  const onClickSubmitNickname = async () => {
    if (isDuplicated) {
      return;
    }
    try {
      const response = await putProfileNickname(nickname);
      console.log(response);
    } catch (e: unknown) {
      const error = e as AxiosError;
      alert(JSON.stringify(error.response?.data.message));
    }
  };

  // 맨 처음 카카오 이미지를 위해 사용자 정보 불러오기
  useEffect(() => {
    // const profile = fetchMe();
    // if (profile.profileImageUrl === null) {
    // setProfileImageUrl('imgs/defaultProfileImg.svg');
    // }
  }, []);

  // 닉네임 중복체크 디바운스
  useEffect(() => {
    checkNicknameDuplicated(debounceNickname);
  }, [debounceNickname]);

  return (
    <Wrapper>
      <SeaIconWrapper>
        <Icon icon="SeaWaveMedium" width={916} height={586} />
      </SeaIconWrapper>
      <ProfileChangeWrapper>
        <ProfileImage src={profileImageUrl} alt="profileImg" />
        <SettingIconLabel htmlFor="profileImg">
          <Icon icon="Setting" width={30} height={30} />
        </SettingIconLabel>
        <ImageInput
          type="file"
          accept="image/png, image/jpeg, image/jpg"
          id="profileImg"
          name="imgSrc"
          onChange={onChangeImg}
        />
        <ProfileImageText>프로필 이미지</ProfileImageText>
        <NicknameInputWrapper>
          <NicknameTitle>닉네임</NicknameTitle>
          <NicknameInput value={nickname} onChange={onChangeNickname} />
        </NicknameInputWrapper>
        <NicknameWarningText isDuplicated={isDuplicated}>*이미 존재하는 닉네임이에요!</NicknameWarningText>
        <SubmitButton type="submit" onClick={onClickSubmitNickname}>
          저장하기
        </SubmitButton>
      </ProfileChangeWrapper>
      <DeleteAccount>탈퇴하기</DeleteAccount>
    </Wrapper>
  );
};

export default MyInfoChange;
