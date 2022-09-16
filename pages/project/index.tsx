import React, { useState, useEffect, useMemo } from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

import { GetProjectMyProps } from '@/lib/api/types';
import queryIntegerization from '@/lib/util/queryIntegerization';

import AppLayoutMain from '@/components/common/Layout/AppLayoutMain';

import TabNavigator from '@/components/project/TabNavigator';
import ProjectsTemplate from '@/components/project/Template/ProjectsTemplate';
import Sidebar from '@/components/project/Sidebar';
import Tab from '@/components/project/Sidebar/TabList/Tab';

import FavoriteTask from '@/components/task/FavoriteTask';

import GanttChart from '@/components/ganttChart';

import * as Styled from '@/styles/pages/Project/style';

interface ProjectPageProps {
  query: GetProjectMyProps;
}

const ProjectPage = ({ query }: ProjectPageProps) => {
  const router = useRouter();

  const [selectedTab, setSelectedTab] = useState<string>('내 프로젝트');

  const tabList = useMemo(
    () => [
      {
        href: '/project/invite',
        children: '프로젝트 초대 확인하기',
      },
      {
        href: '/medal',
        children: '나의 메달 확인하기',
      },
    ],
    [],
  );

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
      <Styled.MainContainer>
        <Sidebar
          TabList={
            <Styled.TabListContainer>
              {tabList.map(({ href, children }) => (
                <Tab key={href} href={href}>
                  {children}
                </Tab>
              ))}
            </Styled.TabListContainer>
          }
        />
        <Styled.MainContentsContainer>
          <TabNavigator selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          {(selectedTab === '내 프로젝트' || selectedTab === '종료된 프로젝트 확인') && (
            <ProjectsTemplate query={query} />
          )}
          {selectedTab === '즐겨찾는 Task' && <FavoriteTask />}
          {selectedTab === '간트차트' && <GanttChart />}
        </Styled.MainContentsContainer>
      </Styled.MainContainer>
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
