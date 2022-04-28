import client from '@/src/lib/api/client';

export const isNicknameDuplicated = (nickname: string) =>
  client.post('/api/account/profile/nickname/unique-validation', { nickname }).then((res) => res.data);
