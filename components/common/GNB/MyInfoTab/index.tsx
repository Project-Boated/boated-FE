import React, { Dispatch, MouseEvent, SetStateAction } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

import { GetUserProfileResponse } from '@/lib/api/types';
import * as queryKeys from '@/lib/constants/queryKeys';
import { getProjectsInvite } from '@/lib/api/projects';

import Text from '@/components/atoms/Text';

import BlueCircleText from '@/components/common/BlueCircleText';

import * as Styled from './style';

interface MyInfoTabProps {
  myInfoTabRef: React.RefObject<HTMLDivElement>;
  myInfo: GetUserProfileResponse;
  setIsMyInfoTabOpen: Dispatch<SetStateAction<boolean>>;
}

const MyInfoTab = ({ myInfoTabRef, myInfo, setIsMyInfoTabOpen }: MyInfoTabProps) => {
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
              <BlueCircleText width={16} height={16}>
                {data.length}
              </BlueCircleText>
            )}
          </Styled.TabItem>
          <Styled.TabItem>
            <Text>로그아웃</Text>
          </Styled.TabItem>
        </Styled.TabContainer>
      </Styled.ProfileContainer>
    </Styled.Container>
  );
};

export default MyInfoTab;
