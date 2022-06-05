export interface PatchUserProfileRequestProps {
  nickname: string | null;
  profileImageUrl: string | null;
  roles: Array<string>;
  username: string | null;
}

export interface PutUserNicknameRequestProps {
  nickname: string;
}

export interface PostUserNicknameDuplicatedRequestProps {
  nickname: string | null;
}

export interface PostUserNicknameDuplicatedResponse {
  duplicated: boolean;
}
