import React from 'react';

import GNB from '@/components/common/GNB';

import { Children } from '@/components/common/Layout/types';

import { Wrapper, ChildrenContainer, BackgroundContainer } from '@/components/common/Layout/style';
import { BackgroundSeaWave } from './style';

const AppLayoutMain = ({ children }: Children) => {
  return (
    <Wrapper>
      <GNB />
      <ChildrenContainer>{children}</ChildrenContainer>
      <BackgroundContainer bottom="-35vh">
        <BackgroundSeaWave />
      </BackgroundContainer>
    </Wrapper>
  );
};

export default AppLayoutMain;
