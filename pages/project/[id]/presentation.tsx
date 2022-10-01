import React from 'react';

import AppLayoutMain from '@/components/common/Layout/AppLayoutMain';

import PresentationVideo from '@/components/project/PresentationVideo';
import Sidebar from '@/components/project/Sidebar';

import * as Styled from '@/styles/pages/Project/presentation';

const PresentationPage = () => {
  return (
    <AppLayoutMain height="100vh" bottom="-45vh">
      <Styled.Container>
        <Sidebar />
        <PresentationVideo />
      </Styled.Container>
    </AppLayoutMain>
  );
};

export default PresentationPage;
