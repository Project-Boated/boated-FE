import React from 'react';

import GNB from '@/components/common/GNB';
import { Wrapper, ChildrenContainer, BackgroundContainer } from '@/components/common/Layout/style';
import { Children } from '@/components/common/Layout/types';

import { BackgroundSeaWave } from './style';

interface AppLayoutMainProps extends Children {
  height?: string;
  bottom?: string;
}

const AppLayoutMain = ({ height, bottom = '-35vh', children }: AppLayoutMainProps) => (
    <Wrapper>
      <GNB />
      <ChildrenContainer height={height}>{children}</ChildrenContainer>
      <BackgroundContainer bottom={bottom}>
        <BackgroundSeaWave />
      </BackgroundContainer>
    </Wrapper>
  );

export default AppLayoutMain;
