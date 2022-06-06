import client from '@/lib/api/client';
import request from '@/lib/api/request';
import {
  PostProfileNicknameDuplicatedRequestProps,
  PostProfileNicknameDuplicatedResponse,
  PutProfileNicknameRequestProps,
} from '@/lib/api/types/profile';

const profileBaseUrl = '/api/account/profile';

const profileUrl = {
  getMe: `${profileBaseUrl}?isProxy=true`,
  postProfileImg: `${profileBaseUrl}/profile-image`,
  isNicknameDuplicated: `${profileBaseUrl}/nickname/unique-validation`,
  putProfileNickname: `${profileBaseUrl}/nickname`,
};

export const getMe = () => client.get(profileUrl.getMe).then((res) => res.data);

export const postProfileImg = (profileImg: FormData) => request('POST', profileUrl.postProfileImg, profileImg);

export const isNicknameDuplicated = ({ nickname }: PostProfileNicknameDuplicatedRequestProps) =>
  request<PostProfileNicknameDuplicatedResponse, PostProfileNicknameDuplicatedRequestProps>(
    'POST',
    profileUrl.isNicknameDuplicated,
    { nickname },
  );

export const putProfileNickname = ({ nickname }: PutProfileNicknameRequestProps) =>
  request('PUT', profileUrl.putProfileNickname, { nickname });
