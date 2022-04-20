import React from 'react';

import type { NextPage } from 'next';
import Icon from '@/components/atoms/Icon';

const LandingPage: NextPage = () => (
  <div>
    <Icon icon="BoatedSymbol" width={100} height={100} />
    <Icon icon="BoatedSignature" width={50} height={50} />
    <Icon icon="ExclamationMark" width={17} height={70} />
  </div>
);

export default LandingPage;
