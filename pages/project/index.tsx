import React, { useState } from 'react';

import TabNavigator from '@/components/project/TabNavigator';
import ProjectsTemplate from '@/components/project/Template/ProjectsTemplate';

import { MainWrapper, MainContentsWrapper } from '@/styles/pages/Project/style';

const ProjectPage = () => {
  const [selectedTab, setSelectedTab] = useState<string>('내 프로젝트');

  return (
    <MainWrapper>
      <div>sidebar</div>
      <MainContentsWrapper>
        <TabNavigator selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        {(selectedTab === '내 프로젝트' || selectedTab === '종료된 프로젝트 확인') && (
          <ProjectsTemplate selectedTab={selectedTab} />
        )}
      </MainContentsWrapper>
    </MainWrapper>
  );
};

export default ProjectPage;
