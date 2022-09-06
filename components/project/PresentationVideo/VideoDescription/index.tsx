import React from 'react';

import Icon from '@/components/atoms/Icon';
import Text from '@/components/atoms/Text';

import * as Styled from './style';

const VideoDescription = () => {
  return (
    <Styled.Container>
      <Styled.TitleContainer>
        <Icon width={20} height={20} icon="BoatedSymbol" />
        <Text>설명 (300자 이내)</Text>
      </Styled.TitleContainer>
      <Styled.DescriptionTextarea />
    </Styled.Container>
  );
};

export default VideoDescription;
