import client from '@/lib/api/client';
import request from '@/lib/api/request';
import {
  PostUserNicknameDuplicatedRequestProps,
  PostUserNicknameDuplicatedResponse,
  PutUserNicknameRequestProps,
} from '@/lib/api/types/user';

const userBaseUrl = '/api/account/profile';

const userUrl = {
  getMe: `${userBaseUrl}?isProxy=true`,
  postProfileImg: `${userBaseUrl}/profile-image`,
  isNicknameDuplicated: `${userBaseUrl}/nickname/unique-validation`,
  putProfileNickname: `${userBaseUrl}/nickname`,
};

export const getMe = () => client.get(userUrl.getMe).then((res) => res.data);

export const postProfileImg = (profileImg: FormData) => request('POST', userUrl.postProfileImg, profileImg);

export const isNicknameDuplicated = ({ nickname }: PostUserNicknameDuplicatedRequestProps) =>
  request<PostUserNicknameDuplicatedResponse, PostUserNicknameDuplicatedRequestProps>(
    'POST',
    userUrl.isNicknameDuplicated,
    { nickname },
  );

export const putProfileNickname = ({ nickname }: PutUserNicknameRequestProps) =>
  request('PUT', userUrl.putProfileNickname, { nickname });
