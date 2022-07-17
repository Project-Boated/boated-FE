import React, { useState } from 'react';

import AppLayoutMain from '@/components/common/Layout/AppLayoutMain';

import Text from '@/components/atoms/Text';

import Sidebar from '@/components/project/Sidebar';
import InfoBox from '@/components/project/InfoBox';
import SubInfo from '@/components/project/SubInfo';
import CrewManagementBox from '@/components/project/CrewManagementBox';

import * as Styled from '@/styles/pages/Project/[id].style';

const ProjectDetailPage = () => {
  const captain = { id: 1, nickname: 'jun5e00' };
  const crews = [
    { id: 2, username: 'test1', nickname: 'test1', profileImageUrl: '' },
    { id: 3, username: 'test2', nickname: 'test2', profileImageUrl: '' },
    { id: 4, username: 'test3', nickname: 'test3', profileImageUrl: '' },
    { id: 5, username: 'test4', nickname: 'test4', profileImageUrl: '' },
  ];
  return (
    <AppLayoutMain height="100vh" bottom="-45vh">
      <Styled.Container>
        <Sidebar />
        <Styled.InfoBoxContainer>
          <Text fontSize={20} lineHeight={28}>
            프로젝트 정보
          </Text>
          <InfoBox />
          <Styled.SubInfoContainer>
            <SubInfo>
              <Text fontSize={14}>총 Task 개수 : (총 12 개)</Text>
            </SubInfo>
            <SubInfo>
              <Text fontSize={14}>모든 파일 용량 : 100MB</Text>
            </SubInfo>
          </Styled.SubInfoContainer>
        </Styled.InfoBoxContainer>
        <CrewManagementBox captain={captain} crews={crews} />
      </Styled.Container>
    </AppLayoutMain>
  );
};

export default ProjectDetailPage;
