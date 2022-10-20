import React from 'react';

import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { useQueryClient } from 'react-query';

import { deleteProjectsKanbanTask } from '@/lib/api/projects';
import { TaskState } from '@/lib/api/types';
import * as queryKeys from '@/lib/constants/queryKeys';

import Button from '@/components/atoms/Button';
import Text from '@/components/atoms/Text';

import Theme from '@/styles/Theme';

import * as Styled from './style';

import Modal from '@/components/Modal';

export interface TaskDeleteModalProps {
  task: TaskState;
  closeModal: () => void;
}

const TaskDeleteModal = ({ task, closeModal }: TaskDeleteModalProps) => {
  const router = useRouter();
  const projectId = parseInt(router.query.id as string, 10);

  const queryClient = useQueryClient();

  const onClickTaskDelete = async () => {
    try {
      await deleteProjectsKanbanTask({ projectId, taskId: task.id });
      queryClient.invalidateQueries(queryKeys.PROJECTS_KANBAN_BY_ID(projectId));
      closeModal();
    } catch (e: unknown) {
      const error = e as AxiosError;
      alert(JSON.stringify(error.response?.data.message));
    }
  };

  return (
    <Modal closeModal={closeModal}>
      <Styled.ContentContainer>
        <Styled.TextContainer>
          <Text>삭제하면 복구할 수 없습니다.</Text>
          <Text fontWeight={700} color={Theme.W_1}>
            {task.name}
          </Text>
          <Text>삭제하시겠습니까?</Text>
        </Styled.TextContainer>
        <Styled.ButtonContainer>
          <Button width={200} height={52} backgroundColor={Theme.S_0} fontColor={Theme.M_1} onClick={onClickTaskDelete}>
            삭제
          </Button>
          <Button width={200} height={52} onClick={closeModal}>
            취소
          </Button>
        </Styled.ButtonContainer>
      </Styled.ContentContainer>
    </Modal>
  );
};

export default TaskDeleteModal;
