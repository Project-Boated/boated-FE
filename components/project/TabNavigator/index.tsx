import React, { useCallback } from 'react';

import Icon from '@/components/atoms/Icon';
import Text from '@/components/atoms/Text';

import Theme from '@/styles/Theme';

import { Wrapper, TabItem, TriangleWrapper } from './style';

export interface TabNavigatorProps {
  selectedTab: string;
  setSelectedTab: React.Dispatch<React.SetStateAction<string>>;
}

const TabNavigator = ({ selectedTab, setSelectedTab }: TabNavigatorProps) => {
  const tabList = ['내 프로젝트', '즐겨찾는 Task', '간트차트', '종료된 프로젝트 확인'];

  const isSelected = useCallback((current: string, target: string) => current === target, []);

  const onClickTab = (e: React.MouseEvent<HTMLDivElement>) => setSelectedTab(e.currentTarget.innerText);

  return (
    <Wrapper>
      {tabList.map((tab) => (
        <TabItem key={tab} isSelected={isSelected(tab, selectedTab)} onClick={onClickTab}>
          {isSelected(tab, selectedTab) && (
            <TriangleWrapper>
              <Icon icon="Triangle" />
            </TriangleWrapper>
          )}
          <Text
            color={isSelected(tab, selectedTab) ? Theme.S_0 : Theme.S_4}
            fontSize={14}
            lineHeight={14}
            fontFamily="Gmarket Sans"
          >
            {tab}
          </Text>
        </TabItem>
      ))}
    </Wrapper>
  );
};

export default TabNavigator;
