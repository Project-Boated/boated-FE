import React from 'react';
import { Story } from '@storybook/react';

import Text, { TextProps } from '@/components/atoms/Text';

export default {
  component: Text,
  title: 'atoms/Text',
};

const Template: Story<TextProps> = (args: TextProps) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'text',
};
