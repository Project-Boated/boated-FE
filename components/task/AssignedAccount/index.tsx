import React from 'react';

import Icon from '@/components/atoms/Icon';
import Text from '@/components/atoms/Text';

import { Container } from './style';

export interface AssignedAccountProps {
  children: React.ReactText;
}

const AssignedAccount = ({ children }: AssignedAccountProps) => (
    <Container>
      <Text fontSize={14}>{children}</Text>
      <Icon icon="BackgroundX" />
    </Container>
  );

export default AssignedAccount;
