import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { TabItem, Wrapper } from '@/components/user/ProfileNavigator/style';

const ProfileNavigator = () => {
  const router = useRouter();

  const hrefs = {
    change: '/user/change',
    invite: '/user/invite',
    medal: '/user/medal',
    unregister: '/user/unregister',
  };

  return (
    <Wrapper>
      <Link href="/user/change">
        <TabItem isSelected={router.asPath === hrefs.change}>내 정보</TabItem>
      </Link>
      <Link href="/user/invite">
        <TabItem isSelected={router.asPath === hrefs.invite}>초대 확인하기</TabItem>
      </Link>
      <Link href="/user/medal">
        <TabItem isSelected={router.asPath === hrefs.medal}>메달 확인하기</TabItem>
      </Link>
      <Link href="/user/unregister">
        <TabItem isSelected={router.asPath === hrefs.unregister}>탈퇴하기</TabItem>
      </Link>
    </Wrapper>
  );
};

export default ProfileNavigator;
