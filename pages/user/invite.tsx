import React from 'react';

import { NextPage } from 'next';

import AppLayoutMain from '@/components/common/Layout/AppLayoutMain';

import CheckProjectInvite from '@/components/user/CheckProjectInvite';
import ProfileNavigator from '@/components/user/ProfileNavigator';

import { Wrapper } from '@/styles/pages/ChangeUserInfoPage/style';

const ProjectInvitePage: NextPage = () => (
    <AppLayoutMain height="100vh" bottom="-45vh">
      <Wrapper>
        <ProfileNavigator />
        <CheckProjectInvite />
      </Wrapper>
    </AppLayoutMain>
  );

export default ProjectInvitePage;
