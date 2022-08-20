import React from 'react';
import { Story } from '@storybook/react';

import BlueCircleText, { BlueCircleTextProps } from '@/components/common/BlueCircleText';

export default {
  component: BlueCircleText,
  title: 'common/BlueCircleText',
};

const Template: Story<BlueCircleTextProps> = (args: BlueCircleTextProps) => <BlueCircleText {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'ME',
};
