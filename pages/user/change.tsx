import React, { useState } from 'react';
import { NextPage } from 'next';

import AppLayoutSub from '@/components/common/AppLayoutSub';

import ChangeUserInfo from '@/components/user/ChangeUserInfo';
import ProfileNavigator from '@/components/user/ProfileNavigator';

import { Wrapper } from '@/styles/pages/ChangeUserInfoPage/style';

const ChangeUserInfoPage: NextPage = () => {
  const [tabNumber, setTabNumber] = useState(0);

  return (
    <AppLayoutSub>
      <Wrapper>
        <ProfileNavigator tabNumber={tabNumber} setTabNumber={setTabNumber} />
        {tabNumber === 0 && <ChangeUserInfo />}
        {/* 초대 받은 프로젝트 1, 탈퇴하기 2 */}
      </Wrapper>
    </AppLayoutSub>
  );
};

export default ChangeUserInfoPage;
