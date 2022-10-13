import request from '@/lib/api/request';
import {
  GetUserProfileResponse,
  PostProfileNicknameDuplicatedRequestProps,
  PostProfileNicknameDuplicatedResponse,
} from '@/lib/api/types/profile';

const profileBaseUrl = '/api/account/profile';

const profileUrl = {
  getMe: `${profileBaseUrl}?isProxy=true`,
  postProfileImg: `${profileBaseUrl}/profile-image`,
  isNicknameDuplicated: `${profileBaseUrl}/nickname/unique-validation`,
  patchProfile: profileBaseUrl,
};

export const getMe = () => request<GetUserProfileResponse>('GET', profileUrl.getMe).then((res) => res.data);

export const isNicknameDuplicated = ({ nickname }: PostProfileNicknameDuplicatedRequestProps) =>
  request<PostProfileNicknameDuplicatedResponse, PostProfileNicknameDuplicatedRequestProps>(
    'POST',
    profileUrl.isNicknameDuplicated,
    { nickname },
  );

export const patchProfile = (multiPartFormData: FormData) =>
  request('PATCH', profileUrl.patchProfile, multiPartFormData);
