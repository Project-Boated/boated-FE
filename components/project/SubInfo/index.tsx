import React from 'react';

import Icon from '@/components/atoms/Icon';

import * as Styled from './style';

export interface SubInfoProps {
  children: React.ReactNode;
}

const SubInfo = ({ children }: SubInfoProps) => (
    <Styled.Container>
      <Icon icon="BoatedSymbol" width={20} height={20} />
      {children}
    </Styled.Container>
  );

export default SubInfo;
