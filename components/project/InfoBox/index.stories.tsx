import React from 'react';
import { Story } from '@storybook/react';

import InfoBox from '@/components/project/InfoBox';

export default {
  component: InfoBox,
  title: 'project/InfoBox',
};

const Template = () => <InfoBox />;

export const Default = Template.bind({});
