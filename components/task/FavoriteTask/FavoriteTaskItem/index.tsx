import React from 'react';

import { Draggable } from 'react-beautiful-dnd';

import { MyProjectState, TaskState } from '@/lib/api/types';

import Text from '@/components/atoms/Text';

import Theme from '@/styles/Theme';

import * as Styled from './style';

export interface FavoriteTaskItemProps {
  project: Omit<MyProjectState, 'crews' | 'captain'>;
  task: Omit<TaskState, 'like'>;
  taskIndex: number;
}

const FavoriteTaskItem = ({ project, task, taskIndex }: FavoriteTaskItemProps) => (
    <Draggable draggableId={String(task.id)} index={taskIndex}>
      {(provided) => (
        <Styled.Container {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
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
            <Text fontSize={13}>{task.deadline.split(' ')[0]}</Text>
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
      )}
    </Draggable>
  );

export default React.memo(FavoriteTaskItem);
