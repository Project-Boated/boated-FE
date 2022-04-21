import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { AxiosError } from 'axios';

import { kakaoLogin } from '@/src/lib/api/auth';
import { kakaoLoginPath } from '@/src/lib/constants';

const LoginPage = () => {
  const router = useRouter();
  const { code } = router.query;

  const onClickKakaoLogin = () => router.push(kakaoLoginPath);

  useEffect(() => {
    if (code) {
      let res;
      (async () => {
        try {
          res = await kakaoLogin(String(code));

          if (res.status === 200) {
            router.push('/login');
          }
        } catch (e: unknown) {
          const error = e as AxiosError;
          alert(JSON.stringify(error.response?.data.message));
        }
      })();
    }
  }, [code]);

  return (
    <div>
      <button onClick={() => onClickKakaoLogin()}>카카오 로그인</button>
    </div>
  );
};

export default LoginPage;
