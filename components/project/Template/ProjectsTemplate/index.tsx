import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';

import {
  getProjectsMyCaptain,
  getProjectsMyCaptainTerminated,
  getProjectsMyCrew,
  getProjectsMyCrewTerminated,
} from '@/lib/api/projects';
import { ProjectInfoState } from '@/lib/api/types';
import * as queryKeys from '@/lib/constants/queryKeys';
import { sortMethodList } from '@/lib/constants/dropdownList';

import Text from '@/components/atoms/Text';

import DropDown from '@/components/common/DropDown';

import SearchInput from '@/components/project/SearchInput';
import ProjectItem from '@/components/project/ProjectItem';

import Theme from '@/styles/Theme';

import { SearchTabWrapper, ProjectListContainer } from './style';

interface ProjectsTemplateProps {
  selectedTab: string;
}

const ProjectsTemplate = ({ selectedTab }: ProjectsTemplateProps) => {
  const [searchTarget, setSearchTarget] = useState<string>('');
  const [selectedSort, setSelectedSort] = useState<string>('마감 기한 순');

  const {
    isLoading: isProjectsMyCaptainLoading,
    error: projectsMyCaptainError,
    data: projectsMyCaptainData,
  } = useQuery(queryKeys.PROJECTS_MY_CAPTAIN, () => getProjectsMyCaptain(), { enabled: selectedTab === '내 프로젝트' });

  const {
    isLoading: isProjectsMyCrewnLoading,
    error: projectsMyCrewError,
    data: projectsMyCrewData,
  } = useQuery(queryKeys.PROJECTS_MY_CREW, () => getProjectsMyCrew(), { enabled: selectedTab === '내 프로젝트' });

  const {
    isLoading: isProjectsMyCaptainTerminatedLoading,
    error: projectsMyCaptainTerminatedError,
    data: projectsMyCaptainTerminatedData,
  } = useQuery(queryKeys.PROJECTS_MY_CAPTAIN_TERMINATED, () => getProjectsMyCaptainTerminated(), {
    enabled: selectedTab === '종료된 프로젝트 확인',
  });

  const {
    isLoading: isProjectsMyCrewTerminatedLoading,
    error: projectsMyCrewTerminatedError,
    data: projectsMyCrewTerminatedData,
  } = useQuery(queryKeys.PROJECTS_MY_CREW_TERMINATED, () => getProjectsMyCrewTerminated(), {
    enabled: selectedTab === '종료된 프로젝트 확인',
  });

  const isProjectLoading = isProjectsMyCaptainLoading || isProjectsMyCrewnLoading;
  const isProjectTerminatedLoading = isProjectsMyCaptainTerminatedLoading || isProjectsMyCrewTerminatedLoading;

  const projectError = projectsMyCaptainError || projectsMyCrewError;
  const projectTerminatedError = projectsMyCaptainTerminatedError || projectsMyCrewTerminatedError;

  let projectData: ProjectInfoState[] = [];

  useEffect(() => {
    if (selectedTab !== '내 프로젝트') return;

    if (!projectsMyCaptainData) return;
    if (!projectsMyCrewData) return;

    projectData = projectsMyCaptainData.concat(projectsMyCrewData);
  }, [selectedTab, projectsMyCaptainData, projectsMyCrewData]);

  useEffect(() => {
    if (selectedTab !== '종료된 프로젝트 확인') return;

    if (!projectsMyCaptainTerminatedData) return;
    if (!projectsMyCrewTerminatedData) return;

    projectData = projectsMyCaptainTerminatedData.concat(projectsMyCrewTerminatedData);
  }, [selectedTab, projectsMyCaptainTerminatedData, projectsMyCrewTerminatedData]);

  if (selectedTab === '내 프로젝트' && isProjectLoading) return <div>project loading...</div>;
  if (selectedTab === '종료된 프로젝트 확인' && isProjectTerminatedLoading)
    return <div>terminated project loading...</div>;

  if (selectedTab === '내 프로젝트' && projectError) return <div>project error</div>;
  if (selectedTab === '종료된 프로젝트 확인' && projectTerminatedError) return <div>terminated project error</div>;

  return (
    <>
      <SearchTabWrapper>
        <SearchInput placeholder="프로젝트 검색" searchTarget={searchTarget} setSearchTarget={setSearchTarget} />
        <Text color={Theme.S_5} fontSize={10} lineHeight={14}>
          진행 중인 프로젝트:
        </Text>
        <Text color={Theme.S_5} fontSize={10} lineHeight={14} hasUnderline>
          {String(projectsMyCaptainData?.length)}
        </Text>
        <DropDown
          type="size-88"
          borderRadius={14}
          defaultTitle={selectedSort}
          selectList={sortMethodList}
          selectedItem={selectedSort}
          setSelectedItem={setSelectedSort}
        />
      </SearchTabWrapper>
      <ProjectListContainer>
        {projectData.length > 0 &&
          projectData.map(({ id, name, description, deadline, captain, crews, terminated, dday, totalDay }, index) => (
            <ProjectItem
              key={`PROJECT_ITEM_${id}`}
              name={name}
              description={description}
              deadline={deadline}
              captain={captain}
              crews={crews}
              terminated={terminated}
              dday={dday}
              totalDay={totalDay}
            />
          ))}
      </ProjectListContainer>
    </>
  );
};

export default ProjectsTemplate;
