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
  TabContainer,
  Tab,
  Wrapper,
} from '@/components/common/GNB/style';

const GNB = () => {
  const { myInfo } = useGetMyInfo();

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
          {myInfo && (
            <TabContainer>
              <Tab>
                <Link href="/project">
                  <a>Project</a>
                </Link>
              </Tab>
              <Tab>
                <Text fontSize={13}>배정된 Task</Text>
              </Tab>
            </TabContainer>
          )}
        </IconWrapper>
        {myInfo && (
          <Link href="/user/change">
            <ProfileWrapper>
              <ProfileImg src={myInfo.profileImageUrl} />
              <Text fontSize={13}>{myInfo.nickname}</Text>
            </ProfileWrapper>
          </Link>
        )}
      </Container>
    </Wrapper>
  );
};

export default GNB;
