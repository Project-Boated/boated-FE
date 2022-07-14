import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

import { TaskState } from '@/lib/api/types';

import Icon from '@/components/atoms/Icon';
import Text from '@/components/atoms/Text';

import {
  AssignedAccountImg,
  AssignedAccountsContainer,
  ContentsWrapper,
  DivEnd,
  EllipsisSpanWrapper,
  IconWrapper,
  TaskDescription,
  TaskNameContainer,
  TextBlock,
  TextContainer,
  Wrapper,
} from '@/components/common/Task/style';

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
        <Wrapper {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
          <IconWrapper onClick={onClickTaskDelete}>
            <Icon icon="XIcon" />
          </IconWrapper>
          <ContentsWrapper>
            <TaskNameContainer>
              <EllipsisSpanWrapper>
                <Text fontWeight={700} fontSize={15}>
                  {task.name}
                </Text>
              </EllipsisSpanWrapper>
            </TaskNameContainer>
            <TextContainer>
              <TextBlock>
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
              </TextBlock>
              <TextBlock>
                <span>
                  <Text fontWeight={400} fontSize={13}>
                    포함 파일 개수
                  </Text>
                  <br />
                  <DivEnd>
                    <Text fontWeight={400} fontSize={15} color={Theme.P_2} hasUnderline>
                      {task.fileCount}
                    </Text>
                    <Text fontWeight={400} fontSize={13}>
                      {` 개`}
                    </Text>
                  </DivEnd>
                </span>
              </TextBlock>
            </TextContainer>
            <AssignedAccountsContainer>
              <AssignedAccountImg src="/imgs/defaultProfileImg.png" />
              <EllipsisSpanWrapper>
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
              </EllipsisSpanWrapper>
            </AssignedAccountsContainer>
            {/* <TaskDescription>
              <EllipsisSpanWrapper>
                <Text fontWeight={400} fontSize={12} color={Theme.P_1}>
                  {task.description}
                </Text>
              </EllipsisSpanWrapper>
            </TaskDescription> */}
          </ContentsWrapper>
        </Wrapper>
      )}
    </Draggable>
  );
};

export default React.memo(Task);
