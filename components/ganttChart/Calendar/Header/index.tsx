import React from 'react';

import Icon from '@/components/atoms/Icon';
import Text from '@/components/atoms/Text';

import * as Styled from './style';

export interface HeaderProps {
  year: number;
  month: number;
  onClickPrev: () => void;
  onClickNext: () => void;
}

const Header = ({ year, month, onClickPrev, onClickNext }: HeaderProps) => {
  return (
    <Styled.Container>
      <Icon icon="Arrow" rotate={90} onClick={onClickPrev} isButton />
      <Text fontSize={14} fontWeight={500} fontFamily="Gmarket Sans">
        {year}년 {month}월
      </Text>
      <Icon icon="Arrow" rotate={270} onClick={onClickNext} isButton />
    </Styled.Container>
  );
};

export default React.memo(Header);
