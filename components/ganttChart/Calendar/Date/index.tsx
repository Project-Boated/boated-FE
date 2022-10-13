import React from 'react';

import Text from '@/components/atoms/Text';

import * as Styled from './style';

import { DateProps } from '@/components/ganttChart/Calendar/type';


const Date = ({ date, dayOfTheWeek }: DateProps) => (
    <Styled.Container>
      <Text fontSize={14}>{date}</Text>
      <Text fontSize={10}>({dayOfTheWeek})</Text>
    </Styled.Container>
  );

export default React.memo(Date);
