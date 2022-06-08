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
        <BackgroundSeaWave />
        <BackgroundRectangle />
      </BackgroundContainer>
    </Wrapper>
  );
};

export default AppLayoutSub;
