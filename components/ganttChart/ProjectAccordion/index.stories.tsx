import React from 'react';
import { Story } from '@storybook/react';

import ProjectAccordion, { ProjectAccordionProps } from '@/components/ganttChart/ProjectAccordion';

export default {
  component: ProjectAccordion,
  title: 'ganttChart/ProjectAccordion',
};

const Template: Story<ProjectAccordionProps> = (args: ProjectAccordionProps) => <ProjectAccordion {...args} />;

export const Default = Template.bind({});
