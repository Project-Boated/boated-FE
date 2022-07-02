import React, { useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import { AxiosError } from 'axios';

import { createProject } from '@/lib/api/projects';

import CreateBox from '@/components/project/CreateBox';

import AppLayoutSub from '@/components/common/Layout/AppLayoutSub';

export interface RequiredInfoState {
  name: string;
  description: string;
  [key: string]: string;
}

export interface OptionalInfoState {
  year: string;
  month: string;
  date: string;
  type?: 'AM' | 'PM';
  hour: string;
  minute: string;
}

const projectCreatePage: NextPage = () => {
  const router = useRouter();

  const [isRight, setIsRight] = useState<boolean>(false);
  const [isProjectNameDuplicated, setIsProjectNameDuplicated] = useState<boolean>(false);

  const [requiredInfo, setRequiredInfo] = useState<RequiredInfoState>({
    name: '',
    description: '',
  });

  const [optionalInfo, setOptionalInfo] = useState<OptionalInfoState>({
    year: '',
    month: '',
    date: '',
    type: 'AM',
    hour: '',
    minute: '',
  });

  const onClickSubmit = useCallback(() => {
    const { name, description } = requiredInfo;
    const tempOptionalInfo = { ...optionalInfo };
    const { year, month, date, hour, minute } = tempOptionalInfo;
    delete tempOptionalInfo.type;

    const tempOptionalInfoValues = Object.values(tempOptionalInfo);

    const dateObject = new Date();
    const today = {
      year: dateObject.getFullYear(),
      month: dateObject.getMonth() + 1,
      date: dateObject.getDate(),
    };

    if (name === '') {
      alert('프로젝트 이름을 작성해주세요!');
      return;
    }

    if (description === '') {
      alert('프로젝트 소개를 작성해주세요!');
      return;
    }

    if (!tempOptionalInfoValues.every((v) => v === '')) {
      if (tempOptionalInfoValues.some((v) => v === '')) {
        alert('프로젝트 기한 항목을 모두 채워주시거나 비워주시기 바랍니다!');
        return;
      }
    }

    // if (today.year > Number(year)) {
    //   alert('지난 연도를 선택할 수 없습니다!');
    //   return;
    // }

    // if (today.year === Number(year)) {
    //   if (today.month > Number(month)) {
    //     alert('지난 월을 선택할 수 없습니다!');
    //     return;
    //   }

    //   if (today.month === Number(month) && today.date > Number(date)) {
    //     alert('지난 날짜를 선택할 수 없습니다!');
    //     return;
    //   }
    // }

    createProject({
      name,
      description,
      deadline: year && `${year}-${month}-${date} ${hour}:${minute}:00`,
    })
      .then((res) => {
        alert('프로젝트가 생성되었습니다!');
        router.push(`/project/${res.data.id}`);
      })
      .catch((e: AxiosError) => {
        if (!e.response) return;

        const { data } = e.response;

        if (data.statusCode === 'P001') {
          setIsProjectNameDuplicated(true);
        }

        alert(data.message);
      });
  }, [requiredInfo, optionalInfo]);

  return (
    <AppLayoutSub>
      <CreateBox
        isRight={isRight}
        requiredInfo={requiredInfo}
        optionalInfo={optionalInfo}
        isProjectNameDuplicated={isProjectNameDuplicated}
        setIsRight={setIsRight}
        setRequiredInfo={setRequiredInfo}
        setOptionalInfo={setOptionalInfo}
        onClickSubmit={onClickSubmit}
      />
    </AppLayoutSub>
  );
};

export default projectCreatePage;
