import React from 'react';

import { ProjectState } from '@/lib/api/types';
import ganttChartColorList from '@/lib/constants/ganttChartColorList';
import getPeriod from '@/lib/util/getPeriod';
import getRandomNumber from '@/lib/util/getRandomNumber';

import Date from '@/components/ganttChart/Calendar/Date';
import { DateProps } from '@/components/ganttChart/Calendar/type';
import ProjectProgressBar from '@/components/ganttChart/ProjectProgressBar';
import TaskProgressBar from '@/components/ganttChart/TaskProgressBar';

import Theme from '@/styles/Theme';

import * as Styled from './style';

export interface BodyProps {
  year: number;
  month: number;
  height: number;
  calendarList: Array<DateProps>;
  projectList: Array<ProjectState>;
}

const Body = ({ year, month, height, calendarList, projectList }: BodyProps) => (
    <Styled.Container height={height}>
      <Styled.GridContainer>
        {calendarList.map(({ date, dayOfTheWeek }) => (
          <Styled.GridItem key={date}>
            <Date date={date} dayOfTheWeek={dayOfTheWeek} />
          </Styled.GridItem>
        ))}
      </Styled.GridContainer>
      <Styled.GanttContainer width={calendarList.length * 51}>
        {projectList.map((project) => {
          const { left: projectLeft, period: projectPeriod } = getPeriod({
            year,
            month,
            creationDate: project.createdDate,
            deadline: project.deadline,
            daysOfMonth: calendarList.length,
          });

          return (
            <Styled.GanttWrapper key={project.id} left={projectLeft}>
              <ProjectProgressBar
                period={projectPeriod}
                backgroundColor={Theme[ganttChartColorList[getRandomNumber(10) - 1]]}
              />
              {project.isClicked &&
                project.assignedTasks.map(({ id, createdDate, deadline }) => {
                  const { left, period } = getPeriod({
                    year,
                    month,
                    creationDate: createdDate,
                    deadline,
                    daysOfMonth: calendarList.length,
                  });
                  <Styled.TaskWrapper key={id} left={projectLeft - left}>
                    <TaskProgressBar period={period} />
                  </Styled.TaskWrapper>;
                })}
            </Styled.GanttWrapper>
          );
        })}
      </Styled.GanttContainer>
    </Styled.Container>
  );

export default React.memo(Body);
