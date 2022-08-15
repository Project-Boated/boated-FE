import React from 'react';

import Text from '@/components/atoms/Text';

import InfoTitle from '@/components/project/InfoTitle';

import TimeTableBox from '@/components/date/TimeTableBox';

import * as Styled from './style';

export interface InfoBoxProps {
  name: string;
  deadline: string;
  description: string;
}

const InfoBox = ({ name, deadline, description }: InfoBoxProps) => {
  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.Row>
          <InfoTitle htmlFor="name" title="프로젝트 이름" subTitle="*255자 이내" />
          <Styled.TitleWrapper>
            <Text fontSize={14}>{name}</Text>
          </Styled.TitleWrapper>
        </Styled.Row>
        <Styled.Row>
          <InfoTitle title="마감기한" isLabel={false} />
          <TimeTableBox deadline={deadline} />
        </Styled.Row>
        <Styled.Row>
          <InfoTitle htmlFor="description" title="프로젝트 소개" />
          <Styled.DescriptionWrapper>
            <Text fontSize={14}>{description}</Text>
          </Styled.DescriptionWrapper>
        </Styled.Row>
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default React.memo(InfoBox);
