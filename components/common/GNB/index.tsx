import React from 'react';
import Link from 'next/link';

import useGetMyInfo from '@/hooks/useGetMyInfo';

import Icon from '@/components/atoms/Icon';
import Text from '@/components/atoms/Text';

import {
  Container,
  IconAnchor,
  IconWrapper,
  ProfileImg,
  ProfileWrapper,
  Tab,
  Wrapper,
} from '@/components/common/GNB/style';

const GNB = () => {
  const { data } = useGetMyInfo();

  return (
    <Wrapper>
      <Container>
        <IconWrapper>
          <Link href="/">
            <IconAnchor>
              <Icon icon="BoatedSymbol" width={29} height={29} />
              <Icon icon="BoatedSignature" width={92} height={30} />
            </IconAnchor>
          </Link>
          {data && (
            <>
              <Tab>
                <Text fontSize={13}>Project</Text>
              </Tab>
              <Tab>
                <Text fontSize={13}>배정된 Task</Text>
              </Tab>
            </>
          )}
        </IconWrapper>
        {data && (
          <ProfileWrapper>
            <ProfileImg src={data.profileImageUrl} />
            <Text fontSize={13}>{data.nickname}</Text>
          </ProfileWrapper>
        )}
      </Container>
    </Wrapper>
  );
};

export default GNB;
