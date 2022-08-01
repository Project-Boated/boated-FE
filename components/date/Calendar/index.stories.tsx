import React from 'react';
import { Story } from '@storybook/react';

import Calendar from '.';

export default {
  component: Calendar,
  title: 'date/Calendar',
};

const Template = () => <Calendar />;

export const Default = Template.bind({});
