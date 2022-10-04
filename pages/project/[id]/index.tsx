import React, { useEffect } from 'react';

import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

import * as projectsAPI from '@/lib/api/projects';
import * as queryKeys from '@/lib/constants/queryKeys';
import getSideTabList from '@/lib/util/getSideTabList';

import Text from '@/components/atoms/Text';
import AppLayoutMain from '@/components/common/Layout/AppLayoutMain';
import useCalendar from '@/components/date/Calendar/useCalendar';
import useTimePicker from '@/components/date/TimePicker/useTimePicker';
import CrewManagementBox from '@/components/project/CrewManagementBox';
import InfoBox from '@/components/project/InfoBox';
import Sidebar from '@/components/project/Sidebar';
import SideTab from '@/components/project/Sidebar/TabList/SideTab';
import SubInfo from '@/components/project/SubInfo';

import * as Styled from '@/styles/pages/Project/[id].style';

const ProjectDetailPage = () => {
  const router = useRouter();
  const id = parseInt(router.query.id as string, 10);
  const path = router.route.split('[id]')[1];

  const { data: projectInfo } = useQuery(`${queryKeys.PROJECTS_BY_ID(id)}`, () => projectsAPI.getProjectsById(id));

  const { data: crewsInfo } = useQuery(`${queryKeys.PROJECTS_BY_ID_CREWS(id)}`, () =>
    projectsAPI.getProjectsByIdCrews(id),
  );

  const { year, setYear, month, setMonth, date, setDate } = useCalendar();
  const { hourType, setHourType, hour, setHour, minute, setMinute } = useTimePicker();

  useEffect(() => {
    if (!projectInfo) return;
    const [calendarInfo, timePickerInfo] = projectInfo.deadline.split(' ');
    const [year, month, date] = calendarInfo.split('-');
    const [hour, minute] = timePickerInfo.split(':');

    setYear(year);
    setMonth(month);
    setDate(date);
    setHour(hour);
    setMinute(minute);
    setHourType(Number(hour) > 12 ? 'PM' : 'AM');
  }, [projectInfo]);

  return (
    <AppLayoutMain height="100vh" bottom="-45vh">
      <Styled.Container>
        <Sidebar TabList={<SideTab path={path} sideTabList={getSideTabList(id)} />} />
        <Styled.InfoBoxContainer>
          <Styled.H1>프로젝트 정보</Styled.H1>
          {projectInfo && (
            <InfoBox
              name={projectInfo.name}
              year={year}
              month={month}
              date={date}
              hourType={hourType}
              hour={hour}
              minute={minute}
              setYear={setYear}
              setMonth={setMonth}
              setDate={setDate}
              setHourType={setHourType}
              setHour={setHour}
              setMinute={setMinute}
              description={projectInfo.description}
            />
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
