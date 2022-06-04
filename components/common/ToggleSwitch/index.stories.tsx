import React from 'react';
import { Story } from '@storybook/react';

import ToggleSwitch, { Props } from '@/components/common/ToggleSwitch';

import { SizeProps } from '@/types/size';

export default {
  component: ToggleSwitch,
  title: 'common/ToggleSwitch',
};

const Template: Story<SizeProps & Props> = (args: SizeProps & Props) => <ToggleSwitch {...args} />;

export const TimeToggle = Template.bind({});
TimeToggle.args = {
  width: 134,
  height: 40,
  leftContent: 'AM',
  rightContent: 'PM',
};
