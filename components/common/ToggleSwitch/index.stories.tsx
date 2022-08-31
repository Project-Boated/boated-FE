import React from 'react';
import { Story } from '@storybook/react';

import ToggleSwitch, { ToggleSwitchProps } from '@/components/common/ToggleSwitch';

export default {
  component: ToggleSwitch,
  title: 'common/ToggleSwitch',
};

const Template: Story<ToggleSwitchProps> = (args: ToggleSwitchProps) => <ToggleSwitch {...args} />;

export const TimeToggle = Template.bind({});
TimeToggle.args = {
  width: 134,
  height: 40,
  leftContent: 'AM',
  rightContent: 'PM',
};
