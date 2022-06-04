import React from 'react';

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
      <ChildrenContainer>{children}</ChildrenContainer>
      <BackgroundContainer>
        <BackgroundSeaWave src="/imgs/SubAppLayoutSeaWave.svg" />
        <BackgroundRectangle src="/imgs/SubAppLayoutRectangle.svg" />
      </BackgroundContainer>
    </Wrapper>
  );
};

export default AppLayoutSub;
