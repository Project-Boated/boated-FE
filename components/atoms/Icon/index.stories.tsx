import React from 'react';

import styled from 'styled-components';


import Icon from '@/components/atoms/Icon';
import * as Icons from '@/components/atoms/Icon/Icons';
import Text from '@/components/atoms/Text';

import Theme from '@/styles/Theme';

import { IconOption } from './type';

export default {
  component: Icon,
  title: 'atoms/Icon',
};

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, auto);
  grid-gap: 20px;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 120px;
  height: 140px;

  padding-top: 10px;

  border-radius: 8px;
  box-shadow: 0px 0px 11px -3px rgba(0, 0, 0, 0.25);
  background-color: ${Theme.S_0};

  svg {
    width: 40px;
    height: 40px;
  }

  & > :first-child {
    margin-bottom: 30px;
  }
`;

const Template = () => {
  const iconList: IconOption[] = Object.keys(Icons) as IconOption[];

  return (
    <GridContainer>
      {iconList.map((icon) => (
        <IconWrapper>
          <Icon icon={icon} />
          <Text fontSize={13} fontWeight={700}>
            {icon}
          </Text>
        </IconWrapper>
      ))}
    </GridContainer>
  );
};

export const Default = Template.bind({});
