import React from 'react';
import { Story } from '@storybook/react';

import Label, { LabelProps } from '.';

export default {
  component: Label,
  title: 'atoms/Label',
};

const Template: Story<LabelProps> = (args: LabelProps) => <Label {...args} />;

export const RequiredLabel = Template.bind({});
RequiredLabel.args = {
  htmlFor: 'name',
  children: <>Task 이름</>,
  isRequired: true,
};
