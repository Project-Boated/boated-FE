import client from '@/lib/api/client';
import { UserProfile } from '@/lib/types/user';

export const getMe = () => client.get('/api/account/profile').then((res) => res.data);

export const getProfileImg = () => client.get('/api/account/profile/profile-image').then((res) => res.data);

export const postProfileImg = (profileImg: FormData) =>
  client.post('/api/account/profile/profile-image', profileImg).then((res) => res.data);

export const putProfileNickname = (nickname: string) =>
  client.put('/api/account/profile/nickname', { nickname }).then((res) => res);

export const patchProfile = (profile: UserProfile) =>
  client.patch('/api/account/profile', profile).then((res) => res.data);

export const isNicknameDuplicated = (nickname: string) =>
  client.post('/api/account/profile/nickname/unique-validation', { nickname }).then((res) => res.data);
