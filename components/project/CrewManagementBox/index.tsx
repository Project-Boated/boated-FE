import React from 'react';

import { PersonInfoState, CrewState } from '@/lib/api/types';

import Icon from '@/components/atoms/Icon';
import InfoTitle from '@/components/project/InfoTitle';

import Theme from '@/styles/Theme';

import * as Styled from './style';

export interface CrewManagementBoxProps {
  captain: PersonInfoState;
  crews: Array<CrewState>;
}

const CrewManagementBox = ({ captain, crews }: CrewManagementBoxProps) => (
    <Styled.Container>
      <Styled.InnerContainer>
        <Styled.CaptainContainer>
          <InfoTitle title="팀장" iconColor={Theme.M_1} isLabel={false} />
          <Styled.CrewList>
            <Styled.CrewItem>{captain.nickname}</Styled.CrewItem>
          </Styled.CrewList>
        </Styled.CaptainContainer>
        <Styled.CrewContainer>
          <Styled.CrewInfoTitleContainer>
            <InfoTitle title="팀원" isLabel={false} />
            <Icon icon="Plus" isButton />
          </Styled.CrewInfoTitleContainer>
          <Styled.CrewList>
            {crews.length > 0 ? (
              crews.map((crew) => (
                <Styled.CrewItem key={crew.id}>
                  {crew.nickname}
                  <Icon icon="X" isButton />
                </Styled.CrewItem>
              ))
            ) : (
              <div>팀원을 초대해보세요!</div>
            )}
          </Styled.CrewList>
        </Styled.CrewContainer>
      </Styled.InnerContainer>
    </Styled.Container>
  );

export default CrewManagementBox;
