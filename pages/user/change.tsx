import React, { useState } from 'react';
import { NextPage } from 'next';

import AppLayoutMain from '@/components/common/Layout/AppLayoutMain';

import ChangeUserInfo from '@/components/user/ChangeUserInfo';
import ProfileNavigator from '@/components/user/ProfileNavigator';
import CheckProjectInvite from '@/components/user/CheckProjectInvite';

import { Wrapper } from '@/styles/pages/ChangeUserInfoPage/style';

const ChangeUserInfoPage: NextPage = () => {
  const [tabNumber, setTabNumber] = useState(0);

  return (
    <AppLayoutMain>
      <Wrapper>
        <ProfileNavigator tabNumber={tabNumber} setTabNumber={setTabNumber} />
        {tabNumber === 0 && <ChangeUserInfo />}
        {tabNumber === 1 && <CheckProjectInvite />}
        {/* 초대 받은 프로젝트 1, 탈퇴하기 2 */}
      </Wrapper>
    </AppLayoutMain>
  );
};

export default ChangeUserInfoPage;
