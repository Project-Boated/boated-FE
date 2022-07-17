import React, { ChangeEvent, useEffect, useState } from 'react';

import { patchProfile } from '@/lib/api/profile';

import useGetMyInfo from '@/hooks/useGetMyInfo';

import Button from '@/components/atoms/Button';

import NicknameInput from '@/components/common/NicknameInput';
import UserProfile from '@/components/common/UserProfile';

import { Container, Wrapper } from '@/components/user/ChangeUserInfo/style';
import { ImgObject } from '@/components/user/RegisterUserInfo';

const ChangeUserInfo = () => {
  const { myInfo, isLoading } = useGetMyInfo();

  const [nickname, setNickname] = useState<string>('');

  const [imgObject, setImgObject] = useState<ImgObject>({
    imgSrc: '/imgs/defaultProfileImg.png',
  });

  const [isDuplicated, setIsDuplicated] = useState<boolean>(false);

  useEffect(() => {
    if (!myInfo) return;
    if (!isLoading) {
      setNickname(myInfo.nickname);
    }
  }, [isLoading]);

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
        alert('회원 정보가 수정되었습니다.');
      }
    });
  };

  return (
    <Wrapper>
      <Container>
        <UserProfile isChangeProfile imgObject={imgObject} setImgObject={setImgObject}>
          프로필 이미지
        </UserProfile>
        <NicknameInput
          value={nickname}
          isDuplicated={isDuplicated}
          setIsDuplicated={setIsDuplicated}
          onChange={onChangeNickname}
        />
      </Container>
      <Button width={200} height={52} onClick={onClickPatchProfile}>
        저장하기
      </Button>
    </Wrapper>
  );
};

export default ChangeUserInfo;
