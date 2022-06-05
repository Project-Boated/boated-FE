import React, { ChangeEvent, useEffect, useState } from 'react';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';

import { getMe, isNicknameDuplicated, postProfileImg, putProfileNickname } from '@/lib/api/user';

import useDebounce from '@/hooks/useDebounce';

import Icon from '@/components/atoms/Icon';
import Text from '@/components/atoms/Text';
import Button from '@/components/atoms/Button';

import Theme from '@/styles/Theme';

import {
  ImageInput,
  NicknameInput,
  NicknameInputWrapper,
  NicknameTitleWrapper,
  NicknameWarningTextWrapper,
  ProfileChangeWrapper,
  ProfileImage,
  SeaIconWrapper,
  SettingIconLabel,
  ButtonWrapper,
  LoadingWrapper,
  Wrapper,
} from './style';

const MyInfoChange = () => {
  const [nickname, setNickname] = useState<string>('');
  const [profileImageUrl, setProfileImageUrl] = useState<string>('/imgs/defaultProfileImg.png');
  const [isDuplicated, setIsDuplicated] = useState<boolean>(false);

  const router = useRouter();

  const [isLoading, debounceNickname] = useDebounce<string>(nickname, 500);

  const onChangeNickname = (e: ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const checkNicknameDuplicated = (nickname: string) => {
    if (nickname === '') {
      return;
    }

    isNicknameDuplicated({ nickname }).then((res) => {
      if (res.data.duplicated) {
        setIsDuplicated(true);
        return;
      }
      setIsDuplicated(false);
    });
  };

  const fetchProfileImage = async () => {
    try {
      const response = await getMe();

      if (response.profileImageUrl === null) {
        setProfileImageUrl('/imgs/defaultProfileImg.png');
        return;
      }
      setProfileImageUrl(response.profileImageUrl);
    } catch (e: unknown) {
      const error = e as AxiosError;
      alert(JSON.stringify(error.response?.data.message));
    }
  };

  const onChangeImg = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files) {
      const formData = new FormData();
      const image = files[0];

      formData.append('file', image);

      postProfileImg(formData).then(() => fetchProfileImage());
    }
  };

  const onClickSubmitNickname = () => {
    if (isDuplicated) {
      return;
    }
    putProfileNickname({ nickname }).then((res) => {
      if (res.statusCode === 200) {
        router.push('/project/create');
      }
    });
  };

  // 맨 처음 카카오 이미지를 위해 사용자 정보 불러오기
  useEffect(() => {
    fetchProfileImage();
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
        <Text fontSize={14}>프로필 이미지</Text>
        <NicknameInputWrapper>
          <NicknameTitleWrapper>
            <Text fontSize={14}>닉네임</Text>
          </NicknameTitleWrapper>
          <NicknameInput value={nickname} onChange={onChangeNickname} />
          <LoadingWrapper>{isLoading && <Icon width={30} height={30} icon="Loading" />}</LoadingWrapper>
        </NicknameInputWrapper>
        <NicknameWarningTextWrapper isDuplicated={isDuplicated}>
          <Text fontSize={10} color={Theme.W_1}>
            *이미 존재하는 닉네임이에요!
          </Text>
        </NicknameWarningTextWrapper>
        <ButtonWrapper>
          <Button width={200} height={52} onClick={onClickSubmitNickname}>
            회원가입하기
          </Button>
        </ButtonWrapper>
      </ProfileChangeWrapper>
    </Wrapper>
  );
};

export default MyInfoChange;
