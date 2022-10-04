import React from 'react';

import { NextPage } from 'next';

import AppLayoutSub from '@/components/common/Layout/AppLayoutSub';
import RegisterUserInfo from '@/components/user/RegisterUserInfo';


const RegisterUserInfoPage: NextPage = () => (
    <AppLayoutSub>
      <RegisterUserInfo />
    </AppLayoutSub>
  );

export default RegisterUserInfoPage;
