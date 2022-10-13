import React from 'react';

import GNB from '@/components/common/GNB';
import { Wrapper, ChildrenContainer, BackgroundContainer } from '@/components/common/Layout/style';
import { Children } from '@/components/common/Layout/types';

import { BackgroundRectangle, BackgroundSeaWave } from './style';

const AppLayoutSub = ({ children }: Children) => (
    <Wrapper>
      <GNB />
      <ChildrenContainer height="100vh">{children}</ChildrenContainer>
      <BackgroundContainer bottom="-20vh">
        <BackgroundSeaWave />
        <BackgroundRectangle />
      </BackgroundContainer>
    </Wrapper>
  );

export default AppLayoutSub;
