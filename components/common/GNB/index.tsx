import React, { useRef } from 'react';

import Link from 'next/link';

import useDetectOutsideClick from '@/hooks/useDetectOutside';
import useGetMyInfo from '@/hooks/useGetMyInfo';

import Icon from '@/components/atoms/Icon';
import Text from '@/components/atoms/Text';

import MyInfoTab from '@/components/common/GNB/MyInfoTab';
import ProjectTab from '@/components/common/GNB/ProjectTab';

import * as Styled from './style';

const GNB = () => {
  const { myInfo, remove } = useGetMyInfo();

  const projectTabRef = useRef(null);
  const myInfoTabRef = useRef(null);

  const [isProjectTabOpen, setIsProjectTabOpen] = useDetectOutsideClick(projectTabRef, false);
  const [isMyInfoTabOpen, setIsMyInfoTabOpen] = useDetectOutsideClick(myInfoTabRef, false);

  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.IconWrapper>
          <Link href={myInfo ? '/project' : '/'} passHref>
            <Styled.IconAnchor>
              <Icon icon="BoatedSymbol" width={29} height={29} />
              <Icon icon="BoatedSignature" width={92} height={30} />
            </Styled.IconAnchor>
          </Link>
          {myInfo && (
            <Styled.TabContainer>
              <Styled.Tab onClick={() => setIsProjectTabOpen(true)}>
                <Text fontSize={13}>Project</Text>
                {isProjectTabOpen && (
                  <>
                    <Styled.TriangleIconWrapper>
                      <Icon icon="Triangle" />
                    </Styled.TriangleIconWrapper>
                    <ProjectTab
                      projectTabRef={projectTabRef}
                      myInfo={myInfo}
                      setIsProjectTabOpen={setIsProjectTabOpen}
                    />
                  </>
                )}
              </Styled.Tab>
              <Styled.Tab>
                <Text fontSize={13}>배정된 Task</Text>
              </Styled.Tab>
            </Styled.TabContainer>
          )}
        </Styled.IconWrapper>
        {myInfo && (
          <>
            <Styled.ProfileWrapper onClick={() => setIsMyInfoTabOpen(true)}>
              {isMyInfoTabOpen && (
                <>
                  <Styled.TriangleIconWrapper>
                    <Icon icon="Triangle" />
                  </Styled.TriangleIconWrapper>
                  <MyInfoTab
                    myInfoTabRef={myInfoTabRef}
                    myInfo={myInfo}
                    setIsMyInfoTabOpen={setIsMyInfoTabOpen}
                    queryRemove={remove}
                  />
                </>
              )}
              <Styled.ProfileImg src={myInfo.profileImageUrl} />
              <Text fontSize={13}>{myInfo.nickname}</Text>
            </Styled.ProfileWrapper>
            <Link href="/project/create" passHref>
              <Styled.ProjectAddWrapper>
                <Icon icon="ProjectAdd" width={56} height={56} />
              </Styled.ProjectAddWrapper>
            </Link>
          </>
        )}
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default GNB;
