import React from 'react';

import { NextPage } from 'next';

import AppLayoutMain from '@/components/common/Layout/AppLayoutMain';

import ChangeUserInfo from '@/components/user/ChangeUserInfo';
import ProfileNavigator from '@/components/user/ProfileNavigator';

import { Wrapper } from '@/styles/pages/ChangeUserInfoPage/style';

const ChangeUserInfoPage: NextPage = () => (
    <AppLayoutMain height="100vh" bottom="-45vh">
      <Wrapper>
        <ProfileNavigator />
        <ChangeUserInfo />
      </Wrapper>
    </AppLayoutMain>
  );

export default ChangeUserInfoPage;
