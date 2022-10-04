import React, { ChangeEvent, useEffect, useState } from 'react';

import useGetMyInfo from '@/hooks/useGetMyInfo';

import Icon from '@/components/atoms/Icon';
import Text from '@/components/atoms/Text';
import {
  ImageInput,
  ProfileImage,
  SettingIconLabel,
  TextWrapper,
  UserProfileWrapper,
} from '@/components/common/UserProfile/style';
import { ImgObject } from '@/components/user/RegisterUserInfo';

export interface UserProfileProps {
  isChangeProfile?: boolean;
  imgObject: ImgObject;
  children: React.ReactNode;
  setImgObject: React.Dispatch<React.SetStateAction<ImgObject>>;
}

const UserProfile = ({ isChangeProfile, imgObject, children, setImgObject }: UserProfileProps) => {
  const [nickname, setNickname] = useState<string>('');

  const { myInfo, isLoading } = useGetMyInfo();

  const onChangeImg = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files) {
      const image = files[0];

      setImgObject({ imgSrc: URL.createObjectURL(image), imgTargetFile: image });
    }
  };

  // 맨 처음 카카오 이미지를 위해 사용자 정보 불러오기
  useEffect(() => {
    if (!myInfo) return;
    if (!isLoading) {
      setNickname(myInfo.nickname);

      setImgObject({ ...imgObject, imgSrc: myInfo.profileImageUrl });
    }
  }, [isLoading]);

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
          <Text fontSize={14}>{children}</Text>
        </>
      ) : (
        <TextWrapper>
            <Text fontSize={14}>{nickname}</Text>
          </TextWrapper>
      )}
    </UserProfileWrapper>
  );
};

export default UserProfile;
