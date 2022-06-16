import React from 'react';
import { Story } from '@storybook/react';

import GNB from '@/components/common/GNB';

export default {
  component: GNB,
  title: 'common/GNB',
};

const Template: Story = () => <GNB />;

export const Default = Template.bind({});
