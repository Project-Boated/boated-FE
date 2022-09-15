import React from 'react';
import { Story } from '@storybook/react';

import ProjectAccordion from '@/components/ganttChart/ProjectAccordion';

export default {
  component: ProjectAccordion,
  title: 'ganttChart/ProjectAccordion',
};

const Template: Story = () => <ProjectAccordion />;

export const Default = Template.bind({});
