import React, { Dispatch, MouseEvent, RefObject, SetStateAction } from 'react';

import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

import { getProjectMy } from '@/lib/api/projects';
import { GetUserProfileResponse, MyProjectState } from '@/lib/api/types';
import * as queryKeys from '@/lib/constants/queryKeys';

import Text from '@/components/atoms/Text';

import CircleText from '@/components/common/CircleText';

import Theme from '@/styles/Theme';

import * as Styled from './style';

interface ProjectTabProps {
  projectTabRef: RefObject<HTMLUListElement>;
  myInfo: GetUserProfileResponse;
  setIsProjectTabOpen: Dispatch<SetStateAction<boolean>>;
}

const ProjectTab = ({ projectTabRef, myInfo, setIsProjectTabOpen }: ProjectTabProps) => {
  const { data } = useQuery(`${queryKeys.PROJECTS_MY}/gnb/project-tab}`, () =>
    getProjectMy({ captain: 'not-term', crew: 'not-term', page: 0, size: 5, sort: 'createdDate,asc' }),
  );

  const router = useRouter();

  const onClickProjectCreateTab = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsProjectTabOpen(false);
    router.push('/project/create');
  };

  const onClickMyProjectTab = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsProjectTabOpen(false);
    router.push('/project');
  };

  const onClickListItemTab = (e: MouseEvent<HTMLLIElement>, projectId: number) => {
    e.stopPropagation();
    setIsProjectTabOpen(false);
    router.push(`/project/${projectId}/kanban`);
  };

  return (
    <Styled.ProjectBoxContainer ref={projectTabRef}>
      <Styled.ItemContainer>
        <Styled.ItemWrapper onClick={onClickProjectCreateTab}>
          <Styled.Item>
            <Text>프로젝트 생성하기</Text>
          </Styled.Item>
        </Styled.ItemWrapper>
        <Styled.ItemWrapper onClick={onClickMyProjectTab}>
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
        {data &&
          data.content.map((project: MyProjectState) => (
              <Styled.MyProjectListItem
                key={project.id}
                onClick={(e) => {
                  onClickListItemTab(e, project.id);
                }}
              >
                <Text fontSize={20}>{project.name}</Text>
                <Styled.TextContainer>
                  <Text>{`캡틴 : ${project.captain.nickname}`}</Text>
                  {project.captain.nickname === myInfo.nickname && <CircleText>ME</CircleText>}
                </Styled.TextContainer>
              </Styled.MyProjectListItem>
            ))}
      </Styled.MyProjectContainer>
    </Styled.ProjectBoxContainer>
  );
};

export default ProjectTab;
