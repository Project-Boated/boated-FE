import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

import { TaskState } from '@/lib/api/types';

import Icon from '@/components/atoms/Icon';
import Text from '@/components/atoms/Text';

import * as Styled from './style';

import Theme from '@/styles/Theme';

export interface TaskProps {
  index: number;
  task: TaskState;
}

const Task = ({ index, task }: TaskProps) => {
  //Task 삭제 함수
  const onClickTaskDelete = () => {};

  return (
    <Draggable draggableId={String(task.id)} index={index}>
      {(provided) => (
        <Styled.Wrapper {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
          <Styled.IconWrapper onClick={onClickTaskDelete}>
            <Icon icon="XIcon" />
          </Styled.IconWrapper>
          <Styled.ContentsWrapper>
            <Styled.TaskNameContainer>
              <Styled.EllipsisSpanWrapper>
                <Text fontWeight={700} fontSize={15}>
                  {task.name}
                </Text>
              </Styled.EllipsisSpanWrapper>
            </Styled.TaskNameContainer>
            <Styled.TextContainer>
              <Styled.TextBlock>
                <span>
                  <Text fontWeight={400} fontSize={13}>
                    마감기한
                  </Text>
                  <Text fontWeight={400} fontSize={13} color={Theme.W_1}>{` (D-${task.dday})`}</Text>
                  <br />
                  <Text fontWeight={400} fontSize={13}>
                    {task.deadline}
                  </Text>
                </span>
              </Styled.TextBlock>
              <Styled.TextBlock>
                <span>
                  <Text fontWeight={400} fontSize={13}>
                    포함 파일 개수
                  </Text>
                  <br />
                  <Styled.DivEnd>
                    <Text fontWeight={400} fontSize={15} color={Theme.P_2} hasUnderline>
                      {task.fileCount}
                    </Text>
                    <Text fontWeight={400} fontSize={13}>
                      {` 개`}
                    </Text>
                  </Styled.DivEnd>
                </span>
              </Styled.TextBlock>
            </Styled.TextContainer>
            <Styled.AssignedAccountsContainer>
              <Styled.AssignedAccountImg src="/imgs/defaultProfileImg.png" />
              <Styled.EllipsisSpanWrapper>
                {task.assignedAccounts.map((account, idx) => {
                  if (idx === task.assignedAccounts.length - 1) {
                    return (
                      <Text fontWeight={400} fontSize={13}>
                        {`${account.nickname}`}
                      </Text>
                    );
                  }
                  return (
                    <Text fontWeight={400} fontSize={13}>
                      {`${account.nickname}, `}
                    </Text>
                  );
                })}
              </Styled.EllipsisSpanWrapper>
            </Styled.AssignedAccountsContainer>
          </Styled.ContentsWrapper>
        </Styled.Wrapper>
      )}
    </Draggable>
  );
};

export default React.memo(Task);
