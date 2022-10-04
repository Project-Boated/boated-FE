import React from 'react';

import { MyProjectState } from '@/lib/api/types';

import Text from '@/components/atoms/Text';
import DdayBar from '@/components/project/DdayBar';

import Theme from '@/styles/Theme';

import * as Styled from './style';

type Props = Omit<MyProjectState, 'id'>;

const ProjectItem = ({ name, description, deadline, captain, crews, terminated, dday, totalDay }: Props) => (
    <Styled.Wrapper terminated={terminated}>
      {!terminated && <DdayBar dday={dday} totalDay={totalDay} />}
      <Styled.Container terminated={terminated}>
        <Text color={Theme.S_5} fontWeight={700}>
          {name}
        </Text>
        <Styled.ProjectInfoWrapper>
          <Styled.PersonInfoContainer>
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
          </Styled.PersonInfoContainer>
          <Styled.ProjectDescriptionContainer>
            <Text color={Theme.S_5} fontSize={13} fontWeight={500} lineHeight={18}>
              프로젝트 설명
            </Text>
            <Text color={Theme.S_5} fontSize={13} lineHeight={18}>
              {description}
            </Text>
          </Styled.ProjectDescriptionContainer>
        </Styled.ProjectInfoWrapper>
        <Styled.DeadlineWrapper>
          <Text color={Theme.S_5} fontWeight={400} fontSize={14}>
            마감기한
          </Text>
          <Text color={Theme.W_1}>{deadline.split(' ')[0].replaceAll('-', '/')}</Text>
        </Styled.DeadlineWrapper>
      </Styled.Container>
    </Styled.Wrapper>
  );

export default React.memo(ProjectItem);
