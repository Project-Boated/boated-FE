export interface PostProfileNicknameDuplicatedRequestProps {
  nickname: string | null;
}

export interface PostProfileNicknameDuplicatedResponse {
  duplicated: boolean;
}

export interface GetUserProfileResponse {
  username: string;
  nickname: string;
  profileImageUrl: string;
  roles: Array<string>;
}
