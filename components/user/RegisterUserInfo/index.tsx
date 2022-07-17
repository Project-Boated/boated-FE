import React, { ChangeEvent, useState } from 'react';
import { useRouter } from 'next/router';

import { patchProfile } from '@/lib/api/profile';

import Icon from '@/components/atoms/Icon';
import Button from '@/components/atoms/Button';

import NicknameInput from '@/components/common/NicknameInput';
import UserProfile from '@/components/common/UserProfile';

import { ProfileChangeWrapper, SeaIconWrapper, ButtonWrapper, Wrapper } from './style';

export interface ImgObject {
  imgSrc: string;
  imgTargetFile?: File;
}

const RegisterUserInfo = () => {
  const [nickname, setNickname] = useState<string>('');
  const [imgObject, setImgObject] = useState<ImgObject>({
    imgSrc: '/imgs/defaultProfileImg.png',
  });
  const [isDuplicated, setIsDuplicated] = useState<boolean>(false);

  const router = useRouter();

  const onChangeNickname = (e: ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const onClickPatchProfile = () => {
    if (isDuplicated) {
      return;
    }

    const formData = new FormData();

    formData.append('nickname', nickname);

    if (imgObject.imgTargetFile) {
      formData.append('profileImageFile', imgObject.imgTargetFile);
    }

    patchProfile(formData).then((res) => {
      if (res.statusCode === 200) {
        router.push('/project');
      }
    });
  };

  return (
    <Wrapper>
      <SeaIconWrapper>
        <Icon icon="SeaWaveMedium" width={916} height={586} />
      </SeaIconWrapper>
      <ProfileChangeWrapper>
        <UserProfile isChangeProfile imgObject={imgObject} setImgObject={setImgObject}>
          프로필 이미지
        </UserProfile>
        <NicknameInput
          value={nickname}
          isDuplicated={isDuplicated}
          setIsDuplicated={setIsDuplicated}
          onChange={onChangeNickname}
        />
        <ButtonWrapper>
          <Button width={200} height={52} onClick={onClickPatchProfile}>
            회원가입하기
          </Button>
        </ButtonWrapper>
      </ProfileChangeWrapper>
    </Wrapper>
  );
};

export default RegisterUserInfo;
