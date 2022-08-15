import React from 'react';
import { useQuery } from 'react-query';
import { useRouter } from 'next/router';

import * as queryKeys from '@/lib/constants/queryKeys';
import * as projectsAPI from '@/lib/api/projects';

import AppLayoutMain from '@/components/common/Layout/AppLayoutMain';

import Text from '@/components/atoms/Text';

import Sidebar from '@/components/project/Sidebar';
import InfoBox from '@/components/project/InfoBox';
import SubInfo from '@/components/project/SubInfo';
import CrewManagementBox from '@/components/project/CrewManagementBox';

import * as Styled from '@/styles/pages/Project/[id].style';

const ProjectDetailPage = () => {
  const router = useRouter();
  const id = parseInt(router.query.id as string, 10);

  const { data: projectInfo } = useQuery(`${queryKeys.PROJECTS_BY_ID(id)}`, () => projectsAPI.getProjectsById(id));

  const { data: crewsInfo } = useQuery(`${queryKeys.PROJECTS_BY_ID_CREWS(id)}`, () =>
    projectsAPI.getProjectsByIdCrews(id),
  );

  return (
    <AppLayoutMain height="100vh" bottom="-45vh">
      <Styled.Container>
        <Sidebar />
        <Styled.InfoBoxContainer>
          <Text fontSize={20} lineHeight={28}>
            프로젝트 정보
          </Text>
          {projectInfo && (
            <InfoBox name={projectInfo.name} deadline={projectInfo.deadline} description={projectInfo.description} />
          )}
          <Styled.SubInfoContainer>
            {projectInfo && (
              <>
                <SubInfo>
                  <Text fontSize={14}>총 Task 개수 : {`(총 ${projectInfo.taskSize} 개)`}</Text>
                </SubInfo>
                <SubInfo>
                  <Text fontSize={14}>모든 파일 용량 : {projectInfo.totalFileSize}MB</Text>
                </SubInfo>
              </>
            )}
          </Styled.SubInfoContainer>
        </Styled.InfoBoxContainer>
        {crewsInfo && projectInfo && <CrewManagementBox captain={projectInfo?.captain} crews={crewsInfo} />}
      </Styled.Container>
    </AppLayoutMain>
  );
};

export default ProjectDetailPage;
