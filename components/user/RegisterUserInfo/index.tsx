import React, { ChangeEvent, useState } from 'react';
import { useRouter } from 'next/router';

import { putProfileNickname } from '@/lib/api/profile';

import Icon from '@/components/atoms/Icon';
import Button from '@/components/atoms/Button';

import NicknameInput from '@/components/user/NicknameInput';
import UserProfile from '@/components/user/UserProfile';

import { ProfileChangeWrapper, SeaIconWrapper, ButtonWrapper, Wrapper } from './style';

const RegisterUserInfo = () => {
  const [nickname, setNickname] = useState<string>('');
  const [isDuplicated, setIsDuplicated] = useState<boolean>(false);

  const router = useRouter();

  const onChangeNickname = (e: ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const onClickSubmitNickname = () => {
    if (isDuplicated) {
      return;
    }
    putProfileNickname({ nickname }).then((res) => {
      if (res.statusCode === 200) {
        router.push('/');
      }
    });
  };

  return (
    <Wrapper>
      <SeaIconWrapper>
        <Icon icon="SeaWaveMedium" width={916} height={586} />
      </SeaIconWrapper>
      <ProfileChangeWrapper>
        <UserProfile isChangeProfile />
        <NicknameInput
          value={nickname}
          isDuplicated={isDuplicated}
          setIsDuplicated={setIsDuplicated}
          onChange={onChangeNickname}
        />
        <ButtonWrapper>
          <Button width={200} height={52} onClick={onClickSubmitNickname}>
            회원가입하기
          </Button>
        </ButtonWrapper>
      </ProfileChangeWrapper>
    </Wrapper>
  );
};

export default RegisterUserInfo;
