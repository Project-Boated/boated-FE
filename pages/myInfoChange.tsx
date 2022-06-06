import React from 'react';
import { NextPage } from 'next';

import MyInfoChange from '@/components/MyInfoChange';

import AppLayoutSub from '@/components/common/AppLayoutSub';

const MyInfoChangePage: NextPage = () => {
  return (
    <AppLayoutSub>
      <MyInfoChange />
    </AppLayoutSub>
  );
};

export default MyInfoChangePage;
