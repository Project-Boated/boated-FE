import React from 'react';
import { Story } from '@storybook/react';

import GanttChart from '.';

export default {
  component: GanttChart,
  title: 'ganttChart/GanttChart',
};

const Template: Story = () => <GanttChart />;

export const Default = Template.bind({});
