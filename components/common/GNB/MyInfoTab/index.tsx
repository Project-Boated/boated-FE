import React, { Dispatch, MouseEvent, SetStateAction } from 'react';

import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

import { logout } from '@/lib/api/auth';
import { getProjectsInvite } from '@/lib/api/projects';
import { GetUserProfileResponse } from '@/lib/api/types';
import * as queryKeys from '@/lib/constants/queryKeys';

import Text from '@/components/atoms/Text';

import CircleText from '@/components/common/CircleText';

import * as Styled from './style';

interface MyInfoTabProps {
  myInfoTabRef: React.RefObject<HTMLDivElement>;
  myInfo: GetUserProfileResponse;
  setIsMyInfoTabOpen: Dispatch<SetStateAction<boolean>>;
  queryRemove: () => void;
}

const MyInfoTab = ({ myInfoTabRef, myInfo, setIsMyInfoTabOpen, queryRemove }: MyInfoTabProps) => {
  const { nickname, profileImageUrl } = myInfo;

  const { data } = useQuery(queryKeys.PROJECTS_INVITES, () => getProjectsInvite());

  const router = useRouter();

  const onClickMyInfoTab = (e: MouseEvent<HTMLLIElement>) => {
    e.stopPropagation();
    setIsMyInfoTabOpen(false);
    router.push('/user/change');
  };

  const onClickProjectInviteTab = (e: MouseEvent<HTMLLIElement>) => {
    e.stopPropagation();
    setIsMyInfoTabOpen(false);
    router.push('/user/invite');
  };

  const handleLogoutTabClick = async () => {
    try {
      await logout();
      setIsMyInfoTabOpen(false);
      queryRemove();
      router.push('/');
    } catch (e: unknown) {
      const error = e as AxiosError;
      alert(JSON.stringify(error.response?.data.message));
    }
  };

  return (
    <Styled.Container ref={myInfoTabRef}>
      <Styled.ProfileContainer>
        <Styled.ProfileImage src={profileImageUrl} />
        <Text>{nickname}</Text>
        <Styled.TabContainer>
          <Styled.TabItem onClick={onClickMyInfoTab}>
            <Text>내 정보</Text>
          </Styled.TabItem>
          <Styled.TabItem onClick={onClickProjectInviteTab}>
            <Text>초대 알림 확인하기</Text>
            {data && data.length > 0 && (
              <CircleText width={16} height={16}>
                {data.length}
              </CircleText>
            )}
          </Styled.TabItem>
          <Styled.TabItem onClick={handleLogoutTabClick}>
            <Text>로그아웃</Text>
          </Styled.TabItem>
        </Styled.TabContainer>
      </Styled.ProfileContainer>
    </Styled.Container>
  );
};

export default MyInfoTab;
