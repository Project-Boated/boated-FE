import React from 'react';

import GNB from '@/components/common/GNB';

import {
  BackgroundContainer,
  BackgroundRectangle,
  BackgroundSeaWave,
  ChildrenContainer,
  Wrapper,
} from '@/styles/common/AppLayoutSub/style';

interface AppLayoutSubProps {
  children: React.ReactNode;
}

const AppLayoutSub = ({ children }: AppLayoutSubProps) => {
  return (
    <Wrapper>
      <GNB />
      <ChildrenContainer>{children}</ChildrenContainer>
      <BackgroundContainer>
        <BackgroundSeaWave />
        <BackgroundRectangle />
      </BackgroundContainer>
    </Wrapper>
  );
};

export default AppLayoutSub;
