import React, { useState, useEffect } from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

import { GetProjectMyProps } from '@/lib/api/types';
import queryIntegerization from '@/lib/util/queryIntegerization';

import AppLayoutMain from '@/components/common/Layout/AppLayoutMain';

import TabNavigator from '@/components/project/TabNavigator';
import ProjectsTemplate from '@/components/project/Template/ProjectsTemplate';

import { MainWrapper, MainContentsWrapper } from '@/styles/pages/Project/style';

interface ProjectPageProps {
  query: GetProjectMyProps;
}

const ProjectPage = ({ query }: ProjectPageProps) => {
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState<string>('내 프로젝트');

  useEffect(() => {
    if (selectedTab === 'Task' || selectedTab === '간트차트') {
      router.push({ pathname: router.pathname });
      return;
    }

    router.push({
      pathname: router.pathname,
      query: {
        ...router.query,
        captain: selectedTab === '내 프로젝트' ? 'not-term' : 'term',
        crew: selectedTab === '내 프로젝트' ? 'not-term' : 'term',
      },
    });
  }, [selectedTab]);

  return (
    <AppLayoutMain>
      <MainWrapper>
        <div>sidebar</div>
        <MainContentsWrapper>
          <TabNavigator selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          {(selectedTab === '내 프로젝트' || selectedTab === '종료된 프로젝트 확인') && (
            <ProjectsTemplate query={query} />
          )}
        </MainContentsWrapper>
      </MainWrapper>
    </AppLayoutMain>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const tempQuery = queryIntegerization(query);

  return {
    props: {
      query: {
        ...query,
        ...tempQuery,
      },
    },
  };
};

export default ProjectPage;
