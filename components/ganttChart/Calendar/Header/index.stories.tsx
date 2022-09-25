import React from 'react';
import { Story } from '@storybook/react';

import Header, { HeaderProps } from '.';

export default {
  component: Header,
  title: 'ganttChart/Calendar/Header',
};

const Template: Story<HeaderProps> = (args: HeaderProps) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  year: 2022,
  month: 8,
};
