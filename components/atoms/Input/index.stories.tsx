import React from 'react';

import { Story } from '@storybook/react';

import Input, { InputProps } from '@/components/atoms/Input';

export default {
  component: Input,
  title: 'atoms/Input',
};

const Template: Story<InputProps> = (args: InputProps) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: 566,
  height: 40,
};
