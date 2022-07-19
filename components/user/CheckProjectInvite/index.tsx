import React, { useCallback } from 'react';
import { useQuery } from 'react-query';
import { AxiosError } from 'axios';

import { getProjectsInvite, postProjectsInviteAccept, postProjectsInviteReject } from '@/lib/api/projects';
import * as queryKeys from '@/lib/constants/queryKeys';

import Button from '@/components/atoms/Button';
import Text from '@/components/atoms/Text';

import {
  BoatedCircle,
  ProjectInviteTitleContainer,
  ProjectInviteWrapper,
  TitleContainer,
  Wrapper,
} from '@/components/user/CheckProjectInvite/style';

import Theme from '@/styles/Theme';

const CheckProjectInvite = () => {
  const { data } = useQuery(queryKeys.PROJECTS_INVITES, () => getProjectsInvite());

  const onClickInviteButton = useCallback((event: React.MouseEvent<HTMLButtonElement>, id: number) => {
    const currentTarget: HTMLButtonElement = event.currentTarget;

    if (currentTarget.innerText === '수락') {
      postProjectsInviteAccept(id)
        .then(() => alert('프로젝트를 수락했습니다.'))
        .catch((e: AxiosError) => alert(JSON.stringify(e.response?.data.message)));
      return;
    }
    postProjectsInviteReject(id)
      .then(() => alert('프로젝트를 거절했습니다.'))
      .catch((e: AxiosError) => alert(JSON.stringify(e.response?.data.message)));
  }, []);

  return (
    <Wrapper>
      <TitleContainer>
        <Text fontSize={20}>초대 받은 프로젝트</Text>
      </TitleContainer>
      {data &&
        data.map((invitation) => {
          return (
            <ProjectInviteWrapper>
              <ProjectInviteTitleContainer>
                <BoatedCircle />
                <Text>{invitation.name}</Text>
              </ProjectInviteTitleContainer>
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
            </ProjectInviteWrapper>
          );
        })}
    </Wrapper>
  );
};

export default CheckProjectInvite;
