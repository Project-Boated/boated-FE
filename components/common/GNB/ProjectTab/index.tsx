import React from 'react';

import Text from '@/components/atoms/Text';

import BlueCircleText from '@/components/common/BlueCircleText';

import Theme from '@/styles/Theme';

import * as Styled from './style';

interface ProjectTabProps {
  projectTabRef: React.RefObject<HTMLUListElement>;
}

const ProjectTab = ({ projectTabRef }: ProjectTabProps) => {
  return (
    <Styled.ProjectBoxContainer ref={projectTabRef}>
      <Styled.ItemContainer>
        <Styled.ItemWrapper>
          <Styled.Item>
            <Text>프로젝트 생성하기</Text>
          </Styled.Item>
        </Styled.ItemWrapper>
        <Styled.ItemWrapper>
          <Styled.Item>
            <Text>전체 프로젝트 보기</Text>
          </Styled.Item>
        </Styled.ItemWrapper>
      </Styled.ItemContainer>
      <Styled.MyProjectContainer>
        <Styled.MyProjectTextWrapper>
          <Text fontSize={10} color={Theme.S_4}>
            내 프로젝트 리스트
          </Text>
        </Styled.MyProjectTextWrapper>
        {/* 내가 캡틴인거 먼저 보여주기 */}
        <Styled.MyProjectListItem>
          <Text fontSize={20}>프로젝트 2</Text>
          <Styled.TextContainer>
            <Text>캡틴 : 누구누구</Text>
            <BlueCircleText>ME</BlueCircleText>
          </Styled.TextContainer>
        </Styled.MyProjectListItem>

        <Styled.MyProjectListItem>
          <Text fontSize={20}>프로젝트 2</Text>
          <Text>캡틴 : 누구누구</Text>
        </Styled.MyProjectListItem>
      </Styled.MyProjectContainer>
    </Styled.ProjectBoxContainer>
  );
};

export default ProjectTab;
