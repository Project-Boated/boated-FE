import React from 'react';

import { ProjectInfoState } from '@/lib/api/types';

import Text from '@/components/atoms/Text';

import DdayBar from '@/components/project/DdayBar';

import Theme from '@/styles/Theme';

import {
  Wrapper,
  Container,
  ProjectInfoWrapper,
  PersonInfoContainer,
  ProjectDescriptionContainer,
  DeadlineWrapper,
} from './style';

type Props = Omit<ProjectInfoState, 'id'>;

const ProjectItem = ({ name, description, deadline, captain, crews, terminated, dday, totalDay }: Props) => {
  return (
    <Wrapper terminated={terminated}>
      {!terminated && <DdayBar dday={dday} totalDay={totalDay} />}
      <Container terminated={terminated}>
        <Text color={Theme.S_5} fontWeight={700}>
          {name}
        </Text>
        <ProjectInfoWrapper>
          <PersonInfoContainer>
            <Text color={Theme.S_5} fontSize={13} fontWeight={500} lineHeight={18}>
              팀장
            </Text>
            <Text color={Theme.S_5} fontSize={13} lineHeight={18}>
              {captain.nickname}
            </Text>
            <Text color={Theme.S_5} fontSize={13} fontWeight={500} lineHeight={18}>
              팀원
            </Text>
            <Text color={Theme.S_5} fontSize={13} lineHeight={18}>
              {crews.map((crew) => crew.nickname).join(', ')}
            </Text>
          </PersonInfoContainer>
          <ProjectDescriptionContainer>
            <Text color={Theme.S_5} fontSize={13} fontWeight={500} lineHeight={18}>
              프로젝트 설명
            </Text>
            <Text color={Theme.S_5} fontSize={13} lineHeight={18}>
              {description}
            </Text>
          </ProjectDescriptionContainer>
        </ProjectInfoWrapper>
        <DeadlineWrapper>
          <Text color={Theme.S_5} fontWeight={400} fontSize={14}>
            마감기한
          </Text>
          <Text color={Theme.W_1}>{deadline.split(' ')[0].replaceAll('-', '/')}</Text>
        </DeadlineWrapper>
      </Container>
    </Wrapper>
  );
};

export default React.memo(ProjectItem);
