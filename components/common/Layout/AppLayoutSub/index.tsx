import React from 'react';

import GNB from '@/components/common/GNB';

import { Children } from '@/components/common/Layout/types';

import { Wrapper, ChildrenContainer, BackgroundContainer } from '@/components/common/Layout/style';
import { BackgroundRectangle, BackgroundSeaWave } from './style';

const AppLayoutSub = ({ children }: Children) => {
  return (
    <Wrapper>
      <GNB />
      <ChildrenContainer height="100vh">{children}</ChildrenContainer>
      <BackgroundContainer>
        <BackgroundSeaWave />
        <BackgroundRectangle />
      </BackgroundContainer>
    </Wrapper>
  );
};

export default AppLayoutSub;
