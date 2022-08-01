import React from 'react';
import { Story } from '@storybook/react';

import TimeTableBox from '.';

export default {
  component: TimeTableBox,
  title: 'date/TimeTableBox',
};

const Template = () => <TimeTableBox />;

export const Default = Template.bind({});
