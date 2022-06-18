import React, { ChangeEvent, useEffect, useState } from 'react';
import { AxiosError } from 'axios';

import { getMe } from '@/lib/api/profile';

import Icon from '@/components/atoms/Icon';
import Text from '@/components/atoms/Text';

import { ImgObject } from '@/components/user/RegisterUserInfo';

import {
  ImageInput,
  ProfileImage,
  SettingIconLabel,
  TextWrapper,
  UserProfileWrapper,
} from '@/components/common/UserProfile/style';

export interface UserProfileProps {
  isChangeProfile?: boolean;
  imgObject: ImgObject;
  setImgObject: React.Dispatch<React.SetStateAction<ImgObject>>;
}

const UserProfile = ({ isChangeProfile, imgObject, setImgObject }: UserProfileProps) => {
  const [nickname, setNickname] = useState<string>('');

  const fetchProfileImage = async () => {
    try {
      const response = await getMe();

      setNickname(response.nickname);

      if (response.profileImageUrl === null) {
        setImgObject({ ...imgObject, imgSrc: '/imgs/defaultProfileImg.png' });
        return;
      }
      setImgObject({ ...imgObject, imgSrc: response.profileImageUrl });
    } catch (e: unknown) {
      const error = e as AxiosError;
      alert(JSON.stringify(error.response?.data.message));
    }
  };

  const onChangeImg = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files) {
      const image = files[0];

      setImgObject({ imgSrc: URL.createObjectURL(image), imgTargetFile: image });
    }
  };

  // 맨 처음 카카오 이미지를 위해 사용자 정보 불러오기
  useEffect(() => {
    fetchProfileImage();
  }, []);

  return (
    <UserProfileWrapper>
      <ProfileImage src={imgObject.imgSrc} alt="profileImg" />
      {isChangeProfile ? (
        <>
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
        </>
      ) : (
        <>
          <TextWrapper>
            <Text fontSize={14}>{nickname}</Text>
          </TextWrapper>
        </>
      )}
    </UserProfileWrapper>
  );
};

export default UserProfile;
