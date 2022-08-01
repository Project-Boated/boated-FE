import React from 'react';
import { Story } from '@storybook/react';

import TimePicker, { TimePickerProps } from '.';

export default {
  component: TimePicker,
  title: 'date/TimePicker',
};

const Template: Story<TimePickerProps> = (args: TimePickerProps) => <TimePicker {...args} />;

export const Default = Template.bind({});
