import React from 'react';

import Icon from '@/components/atoms/Icon';
import Text from '@/components/atoms/Text';

import Theme from '@/styles/Theme';

import { Label, Div } from './style';

export interface InfoTitleProps {
  isLabel?: boolean;
  htmlFor?: string;
  margin?: number;
  iconColor?: string;
  title: React.ReactText;
  subTitle?: React.ReactText;
}

const InfoTitle = ({ isLabel = true, htmlFor, margin = 13, iconColor, title, subTitle }: InfoTitleProps) => isLabel ? (
    <Label htmlFor={htmlFor} margin={margin}>
      <Icon icon="BoatedSymbol" width={20} height={20} color={iconColor} />
      <Text fontSize={14}>{title}</Text>
      {subTitle && (
        <Text fontSize={8} color={Theme.M_2}>
          {subTitle}
        </Text>
      )}
    </Label>
  ) : (
    <Div margin={margin}>
      <Icon icon="BoatedSymbol" width={20} height={20} color={iconColor} />
      <Text fontSize={14}>{title}</Text>
    </Div>
  );

export default InfoTitle;
