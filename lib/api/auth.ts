import client from '@/lib/api/client';

export const kakaoLogin = (code: string) => client.get(`/api/sign-in/kakao?code=${code}`);

export const logout = () => client.post('/api/account/logout');
