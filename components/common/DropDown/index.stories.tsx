import React from 'react';
import { Story } from '@storybook/react';

import { yearList } from '@/lib/constants/dropdownList';

import DropDown, { DropDownProps } from '@/components/common/DropDown';

export default {
  component: DropDown,
  title: 'common/DropDown',
};

const Template: Story<DropDownProps> = (args: DropDownProps) => <DropDown {...args} />;

export const YearDropDown = Template.bind({});
YearDropDown.args = {
  type: 'size-176',
  defaultTitle: 'YYYY',
  selectList: yearList,
};
