import React from 'react';

import { Story } from '@storybook/react';

import InfoTitle, { InfoTitleProps } from '@/components/project/InfoTitle';

export default {
  component: InfoTitle,
  title: 'project/InfoTitle',
};

const Template: Story<InfoTitleProps> = (args: InfoTitleProps) => <InfoTitle {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: '프로젝트 이름',
  subTitle: '*255자 이내',
};
