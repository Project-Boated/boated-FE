import React from 'react';
import { useRouter } from 'next/router';
import { AxiosError } from 'axios';

import { deleteProjectsKanbanLane } from '@/lib/api/projects';

import Button from '@/components/atoms/Button';
import Text from '@/components/atoms/Text';

import Modal from '@/components/Modal';

import Theme from '@/styles/Theme';

import * as Styled from './style';

export interface KanbanColumnDeleteModalProps {
  kanbanLaneId: number;
  columnName: string;
  taskDataLength: number;
  closeModal: () => void;
}

const KanbanColumnDeleteModal = ({
  kanbanLaneId,
  columnName,
  taskDataLength,
  closeModal,
}: KanbanColumnDeleteModalProps) => {
  const router = useRouter();
  const projectId = parseInt(router.query.id as string, 10);

  const onClickDeleteKanbanLane = async () => {
    try {
      await deleteProjectsKanbanLane({ projectId, kanbanLaneId });
      closeModal();
    } catch (e: unknown) {
      const error = e as AxiosError;
      alert(JSON.stringify(error.response?.data.message));
    }
  };

  return (
    <Modal closeModal={closeModal}>
      {taskDataLength > 0 ? (
        <Styled.ContentContainer>
          <Styled.TextContainer>
            <Text fontWeight={700} color={Theme.W_1}>
              해당 레인에 TASK가 남아있습니다.
            </Text>
            <Text>해당 레인에 있는</Text>
            <Text>TASK 삭제 후 다시 시도해주세요.</Text>
          </Styled.TextContainer>
          <Styled.ButtonContainer>
            <Button width={200} height={52} onClick={closeModal}>
              확인
            </Button>
          </Styled.ButtonContainer>
        </Styled.ContentContainer>
      ) : (
        <Styled.ContentContainer>
          <Styled.TextContainer>
            <Text>삭제하면 복구할 수 없습니다.</Text>
            <Text fontWeight={700} color={Theme.W_1}>
              {columnName}
            </Text>
            <Text>삭제하시겠습니까?</Text>
          </Styled.TextContainer>
          <Styled.ButtonContainer>
            <Button
              width={200}
              height={52}
              backgroundColor={Theme.S_0}
              fontColor={Theme.M_1}
              onClick={onClickDeleteKanbanLane}
            >
              삭제
            </Button>
            <Button width={200} height={52} onClick={closeModal}>
              취소
            </Button>
          </Styled.ButtonContainer>
        </Styled.ContentContainer>
      )}
    </Modal>
  );
};

export default KanbanColumnDeleteModal;
