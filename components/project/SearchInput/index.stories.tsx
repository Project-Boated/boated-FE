import React from 'react';
import { Story } from '@storybook/react';

import SearchInput, { SearchInputProps } from '.';

export default {
  component: SearchInput,
  title: 'project/SearchInput',
};

const Template: Story<SearchInputProps> = (args: SearchInputProps) => <SearchInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: '프로젝트 검색',
};
