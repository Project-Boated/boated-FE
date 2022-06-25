import { TabItem, Wrapper } from '@/components/user/ProfileNavigator/style';
import React from 'react';

interface ProfileNavigator {
  tabNumber: number;
  setTabNumber: React.Dispatch<React.SetStateAction<number>>;
}

const ProfileNavigator = ({ tabNumber, setTabNumber }: ProfileNavigator) => {
  return (
    <Wrapper>
      <TabItem onClick={() => setTabNumber(0)} isSelected={tabNumber === 0}>
        내 정보
      </TabItem>
      <TabItem onClick={() => setTabNumber(1)} isSelected={tabNumber === 1}>
        초대 확인하기
      </TabItem>
      <TabItem onClick={() => setTabNumber(2)} isSelected={tabNumber === 2}>
        탈퇴하기
      </TabItem>
    </Wrapper>
  );
};

export default ProfileNavigator;
