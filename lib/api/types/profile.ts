export interface PatchProfileProfileRequestProps {
  nickname: string | null;
  profileImageUrl: string | null;
  roles: Array<string>;
  username: string | null;
}

export interface PutProfileNicknameRequestProps {
  nickname: string;
}

export interface PostProfileNicknameDuplicatedRequestProps {
  nickname: string | null;
}

export interface PostProfileNicknameDuplicatedResponse {
  duplicated: boolean;
}
