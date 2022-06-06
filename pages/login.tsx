import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import { AxiosError } from 'axios';

import { kakaoLogin } from '@/lib/api/auth';

import AppLayoutSub from '@/components/common/AppLayoutSub';
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

          if (res.status === 200) {
            router.push('/myInfoChange');
          }
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
