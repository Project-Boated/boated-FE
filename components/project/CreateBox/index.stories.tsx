import React from 'react';
import { Story } from '@storybook/react';

import CreateBox, { Props } from '@/components/project/CreateBox';

export default {
  component: CreateBox,
  title: 'project/CreateBox',
};

const Template: Story<Props> = (args: Props) => <CreateBox {...args} />;

export const Default = Template.bind({});
