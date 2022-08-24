import React from 'react';

import { MyProjectState, TaskState } from '@/lib/api/types';

import Text from '@/components/atoms/Text';

import Theme from '@/styles/Theme';

import * as Styled from './style';

export interface FavoriteTaskItemProps {
  project: Omit<MyProjectState, 'crews' | 'captain'>;
  task: Omit<TaskState, 'like'>;
}

const FavoriteTaskItem = ({ project, task }: FavoriteTaskItemProps) => {
  return (
    <Styled.Container>
      <Styled.ProjectNameWrapper>
        <Text fontSize={12} color={Theme.P_1}>
          {project.name}
        </Text>
      </Styled.ProjectNameWrapper>
      <Styled.TaskNameWrapper>
        <Text fontSize={15} fontWeight={700}>
          {task.name}
        </Text>
      </Styled.TaskNameWrapper>
      <Styled.DdayWrapper>
        <Text fontSize={13}>{task.deadline}</Text>
        <Text fontSize={13} color={Theme.W_1}>
          {`(D-${task.dday})`}
        </Text>
      </Styled.DdayWrapper>
      <Styled.TeammatesWrapper>
        <Styled.AssignedAccountImg src="/imgs/defaultProfileImg.png" />
        <Text fontSize={13}>
          {task.assignedAccounts.map((account, idx) => {
            if (idx === task.assignedAccounts.length - 1) {
              return `${account.nickname}`;
            }
            return `${account.nickname}, `;
          })}
        </Text>
      </Styled.TeammatesWrapper>
    </Styled.Container>
  );
};

export default FavoriteTaskItem;
