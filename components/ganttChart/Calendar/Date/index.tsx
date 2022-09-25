import React from 'react';

import Text from '@/components/atoms/Text';

import { DateProps } from '@/components/ganttChart/Calendar/type';

import * as Styled from './style';

const Date = ({ date, dayOfTheWeek }: DateProps) => {
  return (
    <Styled.Container>
      <Text fontSize={14}>{date}</Text>
      <Text fontSize={10}>({dayOfTheWeek})</Text>
    </Styled.Container>
  );
};

export default React.memo(Date);
