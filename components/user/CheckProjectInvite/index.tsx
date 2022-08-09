import React, { useCallback } from 'react';
import { useQuery } from 'react-query';
import { AxiosError } from 'axios';

import { getProjectsInvite, postProjectsInviteAccept, postProjectsInviteReject } from '@/lib/api/projects';
import * as queryKeys from '@/lib/constants/queryKeys';

import useGetMyInfo from '@/hooks/useGetMyInfo';

import Button from '@/components/atoms/Button';
import Text from '@/components/atoms/Text';

import Theme from '@/styles/Theme';

import * as Styled from './style';

const CheckProjectInvite = () => {
  // const { data } = useQuery(queryKeys.PROJECTS_INVITES, () => getProjectsInvite());
  const { myInfo } = useGetMyInfo();

  const data = [
    {
      id: 4,
      createdDate: '2022-08-08T14:52:55.128019',
      name: 'name',
      description: 'description',
      captainNickname: 'testNickname',
    },
    {
      id: 4,
      createdDate: '2022-08-08T14:52:55.128019',
      name: 'name',
      description: 'description',
      captainNickname: 'testNickname',
    },
    {
      id: 4,
      createdDate: '2022-08-08T14:52:55.128019',
      name: 'name',
      description: 'description',
      captainNickname: 'testNickname',
    },
  ];

  const onClickInviteButton = useCallback((event: React.MouseEvent<HTMLButtonElement>, invitationId: number) => {
    const currentTarget: HTMLButtonElement = event.currentTarget;

    if (currentTarget.innerText === '수락') {
      postProjectsInviteAccept(invitationId)
        .then(() => alert('프로젝트를 수락했습니다.'))
        .catch((e: AxiosError) => alert(JSON.stringify(e.response?.data.message)));
      return;
    }
    postProjectsInviteReject(invitationId)
      .then(() => alert('프로젝트를 거절했습니다.'))
      .catch((e: AxiosError) => alert(JSON.stringify(e.response?.data.message)));
  }, []);

  return (
    <Styled.Wrapper>
      <Styled.TitleContainer>
        <Text fontSize={20}>초대 받은 프로젝트</Text>
      </Styled.TitleContainer>
      {data &&
        data.map((invitation) => {
          return (
            <Styled.ProjectInviteWrapper>
              <Styled.ProjectInviteTitleContainer>
                <Styled.IconNameContainer>
                  <Styled.BoatedCircle />
                  <Text>{invitation.name}</Text>
                </Styled.IconNameContainer>
                <Styled.CaptainContainer>
                  <Text>팀장 : </Text>
                  <Styled.CaptainNameBox>
                    <Text>{invitation.captainNickname}</Text>
                    {myInfo && myInfo.nickname === invitation.captainNickname && (
                      <Styled.CircleMeBox>
                        <Text fontSize={10} fontWeight={400} color={Theme.S_0}>
                          ME
                        </Text>
                      </Styled.CircleMeBox>
                    )}
                  </Styled.CaptainNameBox>
                </Styled.CaptainContainer>
              </Styled.ProjectInviteTitleContainer>
              <Button
                width={115}
                height={59}
                fontSize={15}
                onClick={(event) => onClickInviteButton(event, invitation.id)}
              >
                수락
              </Button>
              <Button
                width={115}
                height={59}
                fontSize={15}
                backgroundColor={Theme.S_0}
                fontColor={Theme.W_1}
                onClick={(event) => onClickInviteButton(event, invitation.id)}
              >
                거절
              </Button>
            </Styled.ProjectInviteWrapper>
          );
        })}
    </Styled.Wrapper>
  );
};

export default CheckProjectInvite;
