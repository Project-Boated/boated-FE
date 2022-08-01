import React, { useState, useMemo, useCallback } from 'react';

import useModal from '@/hooks/useModal';

import Input from '@/components/atoms/Input';
import Textarea from '@/components/atoms/Textarea';

import InfoTitle from '@/components/project/InfoTitle';

import TimeTableBox from '@/components/date/TimeTableBox';

import { RequiredInfo } from '@/types/project';

import * as Styled from './style';

const InfoBox = () => {
  const [info, setInfo] = useState<RequiredInfo>({
    name: '',
    description: '',
  });

  const onChangeInfo = useCallback((e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value } = e.target;

    setInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.Row>
          <InfoTitle htmlFor="name" title="프로젝트 이름" subTitle="*255자 이내" />
          <Input
            type="text"
            id="name"
            name="name"
            width={580}
            height={30}
            maxLength={255}
            value={info.name}
            onChange={onChangeInfo}
          />
        </Styled.Row>
        <Styled.Row>
          <InfoTitle title="마감기한" isLabel={false} />
          <TimeTableBox />
        </Styled.Row>
        <Styled.Row>
          <InfoTitle htmlFor="description" title="프로젝트 소개" />
          <Textarea
            width={580}
            height={139}
            id="description"
            name="description"
            maxLength={255}
            value={info.description}
            onChange={onChangeInfo}
          />
        </Styled.Row>
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default InfoBox;
