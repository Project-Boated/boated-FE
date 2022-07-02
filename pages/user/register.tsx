import React from 'react';
import { NextPage } from 'next';

import RegisterUserInfo from '@/components/user/RegisterUserInfo';

import AppLayoutSub from '@/components/common/Layout/AppLayoutSub';

const RegisterUserInfoPage: NextPage = () => {
  return (
    <AppLayoutSub>
      <RegisterUserInfo />
    </AppLayoutSub>
  );
};

export default RegisterUserInfoPage;
