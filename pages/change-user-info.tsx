import React from 'react';
import { NextPage } from 'next';

import AppLayoutSub from '@/components/common/AppLayoutSub';

import ChangeUserInfo from '@/components/user/ChangeUserInfo';

const ChangeUserInfoPage: NextPage = () => {
  return (
    <AppLayoutSub>
      <ChangeUserInfo />
    </AppLayoutSub>
  );
};

export default ChangeUserInfoPage;
