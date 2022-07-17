import React from 'react';

import { timeTableType } from '@/lib/constants';

import Icon from '@/components/atoms/Icon';
import Text from '@/components/atoms/Text';

import Theme from '@/styles/Theme';

import * as Styled from './style';

export interface TimeTableSelectorProps {
  type: 'Calendar' | 'Clock';
  contents: string;
  onClick: () => void;
}

const TimeTableSelector = ({ type, contents, onClick }: TimeTableSelectorProps) => {
  return (
    <Styled.Container onClick={onClick}>
      <Icon icon="Calendar" />
      <Styled.ContentsContainer>
        <Text fontSize={10} color={Theme.P_2}>
          {timeTableType[type]}선택
        </Text>
        <Text fontSize={14}>{contents}</Text>
      </Styled.ContentsContainer>
      <Icon icon="Arrow" />
    </Styled.Container>
  );
};

export default TimeTableSelector;
