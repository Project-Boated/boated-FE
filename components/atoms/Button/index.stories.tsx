import React from 'react';
import { Story } from '@storybook/react';

import Button, { Props } from '@/components/atoms/Button';

import { SizeProps } from '@/types/size';

const Template: Story<SizeProps & Props> = (args: SizeProps & Props) => <Button {...args} />;

export const ProjectCreateButton = Template.bind({});
ProjectCreateButton.args = {
  width: 200,
  height: 52,
  children: '생성하기',
};
