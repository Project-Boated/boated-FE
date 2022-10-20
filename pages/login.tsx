import React, { useEffect } from 'react';

import { AxiosError } from 'axios';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

import { kakaoLogin } from '@/lib/api/auth';

import AppLayoutSub from '@/components/common/Layout/AppLayoutSub';

import LoginBox from '@/components/Login/LoginBox';

const LoginPage: NextPage = () => {
  const router = useRouter();
  const { code } = router.query;

  useEffect(() => {
    if (code) {
      let res;
      (async () => {
        try {
          res = await kakaoLogin(String(code));

          if (res.data.login) {
            router.push('/project');
            return;
          }
          router.push('/user/register');
        } catch (e: unknown) {
          const error = e as AxiosError;
          alert(JSON.stringify(error.response?.data.message));
        }
      })();
    }
  }, [code]);

  return (
    <AppLayoutSub>
      <LoginBox />
    </AppLayoutSub>
  );
};

export default LoginPage;
