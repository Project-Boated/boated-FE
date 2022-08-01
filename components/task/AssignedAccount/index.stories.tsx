import React from 'react';
import { Story } from '@storybook/react';

import AssignedAccount, { AssignedAccountProps } from '.';

export default {
  component: AssignedAccount,
  title: 'task/AssignedAccount',
};

const Template: Story<AssignedAccountProps> = (args: AssignedAccountProps) => <AssignedAccount {...args} />;

export const Default = Template.bind({});
Default.args = {
  nickname: '윤준서',
};
