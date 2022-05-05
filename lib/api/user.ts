import client from '@/lib/api/client';
import { User } from '@/lib/types/user';

export const getMe = () => client.get('/api/account/profile').then((res) => res.data);

export const getProfileImg = () => client.get('/api/account/profile/profile-image').then((res) => res.data);

export const putProfileImg = (profileImg: FormData) =>
  client.put('/api/account/profile/profile-image', { profileImg }).then((res) => res.data);

export const patchProfile = (profile: User) => client.patch('/api/account/profile', profile).then((res) => res.data);

export const isNicknameDuplicated = (nickname: string) =>
  client.post('/api/account/profile/nickname/unique-validation', { nickname }).then((res) => res.data);
