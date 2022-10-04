import React from 'react';

import { NextPage } from 'next';

import AppLayoutMain from '@/components/common/Layout/AppLayoutMain';
import ProfileNavigator from '@/components/user/ProfileNavigator';

import { Wrapper } from '@/styles/pages/ChangeUserInfoPage/style';

const UnregisterPage: NextPage = () => (
    <AppLayoutMain height="100vh" bottom="-45vh">
      <Wrapper>
        <ProfileNavigator />
      </Wrapper>
    </AppLayoutMain>
  );

export default UnregisterPage;
