import React from 'react';

import Text from '@/components/atoms/Text';

import Theme from '@/styles/Theme';

import { Wrapper, Container } from './style';

export interface DdayBarProps {
  dday: number;
  totalDay: number;
}

const DdayBar = ({ dday, totalDay }: DdayBarProps) => {
  return (
    <Wrapper>
      <Container dday={dday} percentage={Math.ceil((dday / totalDay) * 100)} />
      <Text fontSize={15}>D-</Text>
      <Text color={dday === 1 ? Theme.W_1 : Theme.M_1} fontSize={15}>
        {dday}
      </Text>
    </Wrapper>
  );
};

export default React.memo(DdayBar);
