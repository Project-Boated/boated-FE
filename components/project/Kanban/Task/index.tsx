import React, { useCallback, useRef, useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { useRouter } from 'next/router';
import { AxiosError } from 'axios';

import { deleteProjectsKanbanTaskLike, postProjectsKanbanTaskLike } from '@/lib/api/projects';
import { TaskState } from '@/lib/api/types';

import useModal from '@/hooks/useModal';
import useDetectOutsideClick from '@/hooks/useDetectOutside';

import Icon from '@/components/atoms/Icon';
import Text from '@/components/atoms/Text';

import TaskDeleteModal from '@/components/Modal/TaskDeleteModal';

import Theme from '@/styles/Theme';

import * as Styled from './style';

export interface TaskProps {
  index: number;
  task: TaskState;
}

const Task = ({ index, task }: TaskProps) => {
  const router = useRouter();
  const projectId = parseInt(router.query.id as string, 10);

  const [isDottedIconVisible, setIsDottedIconVisible] = useState(false);

  const moreContainerRef = useRef(null);

  const [isMoreClicked, setIsMoreClicked] = useDetectOutsideClick(moreContainerRef, false);

  const { isShowModal, closeModal, openModal } = useModal();

  const onClickTaskRemoveWrapper = () => {
    openModal();
    setIsDottedIconVisible(false);
    setIsMoreClicked(false);
  };

  const onClickTaskLike = async () => {
    try {
      if (task.like) {
        await deleteProjectsKanbanTaskLike({ projectId, taskId: task.id });
        setIsMoreClicked(false);
        setIsDottedIconVisible(false);
        return;
      }
      await postProjectsKanbanTaskLike({ projectId, taskId: task.id });
      setIsMoreClicked(false);
      setIsDottedIconVisible(false);
    } catch (e: unknown) {
      const error = e as AxiosError;
      alert(JSON.stringify(error.response?.data.message));
    }
  };

  const onMouseDottedIcon = useCallback(() => {
    if (!isDottedIconVisible) {
      setIsDottedIconVisible(true);
      return;
    }
    setIsDottedIconVisible(true);
  }, [setIsDottedIconVisible]);

  return (
    <>
      {isShowModal && <TaskDeleteModal closeModal={closeModal} task={task} />}
      <Draggable draggableId={String(task.id)} index={index}>
        {(provided) => (
          <Styled.Wrapper
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            onMouseEnter={onMouseDottedIcon}
            onMouseLeave={onMouseDottedIcon}
          >
            <Styled.LikeIconWrapper onClick={onClickTaskLike}>
              <Icon icon="TaskFavorite" color={task.like ? Theme.P_1 : Theme.S_2} />
            </Styled.LikeIconWrapper>
            {isDottedIconVisible && (
              <Styled.DottedIconWrapper onClick={() => setIsMoreClicked(true)}>
                <Icon icon="MoreDot" />
              </Styled.DottedIconWrapper>
            )}
            {isMoreClicked && (
              <Styled.MoreContainer ref={moreContainerRef}>
                <Styled.FavoriteAddWrapper onClick={onClickTaskLike}>
                  <Text>{task.like ? '즐겨찾기 삭제' : '즐겨찾기에 추가'}</Text>
                </Styled.FavoriteAddWrapper>
                <Styled.TaskRemoveWrapper onClick={onClickTaskRemoveWrapper}>
                  <Text>삭제하기</Text>
                </Styled.TaskRemoveWrapper>
              </Styled.MoreContainer>
            )}
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
                    <Text fontWeight={400} fontSize={13} color={Theme.W_1}>{` (${
                      task.dday > 0 ? `D+${task.dday}` : `D${task.dday}`
                    })`}</Text>
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
    </>
  );
};

export default React.memo(Task);
