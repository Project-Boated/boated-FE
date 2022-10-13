import React from 'react';

import { Story } from '@storybook/react';

import CircleText, { CircleTextProps } from '@/components/common/CircleText';

export default {
  component: CircleText,
  title: 'common/CircleText',
};

const Template: Story<CircleTextProps> = (args: CircleTextProps) => <CircleText {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'ME',
};
