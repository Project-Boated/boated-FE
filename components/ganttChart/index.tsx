import React, { useState, useEffect, useRef } from 'react';
import { useQuery } from 'react-query';

import { getMyGanttChart } from '@/lib/api/my';
import { ProjectState } from '@/lib/api/types';
import * as queryKeys from '@/lib/constants/queryKeys';

import useCalendar from '@/components/ganttChart/Calendar/useCalendar';
import Header from '@/components/ganttChart/Calendar/Header';
import Body from '@/components/ganttChart/Calendar/Body';

import ProjectAccordion from '@/components/ganttChart/ProjectAccordion';

import * as Styled from './style';

const GanttChart = () => {
  const { year, month, calendarList, onClickPrev, onClickNext } = useCalendar();

  const { data } = useQuery(
    `${queryKeys.GET_MY_GANTT_CHART({ year, month })}`,
    () => getMyGanttChart({ year, month }),
    {
      retry: false,
    },
  );

  const [projectList, setProjectList] = useState<Array<ProjectState>>([]);
  const [hegiht, setHeight] = useState<number>(0);

  const projectListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!data) return;

    const newProjectList = data.projects.map((project) => {
      return {
        ...project,
        isClicked: false,
      };
    });

    setProjectList(newProjectList);
  }, [data]);

  useEffect(() => {
    if (!projectListRef.current) return;

    setHeight(projectListRef.current.scrollHeight);
  }, [projectListRef]);

  return (
    <Styled.Container>
      <Header year={year} month={month} onClickPrev={onClickPrev} onClickNext={onClickNext} />
      <Styled.FlexContainer>
        <Styled.ProjectListContainer ref={projectListRef}>
          <Styled.h2>&lt; 프로젝트 &gt;</Styled.h2>
          <Styled.ProjectListWrapper>
            {projectList.map((project) => (
              <Styled.ProjectList key={project.id}>
                <ProjectAccordion {...project} setProjectList={setProjectList} />
              </Styled.ProjectList>
            ))}
          </Styled.ProjectListWrapper>
        </Styled.ProjectListContainer>
        <Body year={year} month={month} height={hegiht} calendarList={calendarList} projectList={projectList} />
      </Styled.FlexContainer>
    </Styled.Container>
  );
};

export default GanttChart;
