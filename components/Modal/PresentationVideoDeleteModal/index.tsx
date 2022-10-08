import React from 'react';
import { useRouter } from 'next/router';
import { AxiosError } from 'axios';

import { TaskState } from '@/lib/api/types';
import { deleteProjectsKanbanTask } from '@/lib/api/projects';

import Button from '@/components/atoms/Button';
import Text from '@/components/atoms/Text';

import Modal from '@/components/Modal';

import Theme from '@/styles/Theme';

import * as Styled from './style';

export interface PresentationVideoDeleteModalProps {
  closeModal: () => void;
  handleVideoDeleteButton: () => void;
}

const PresentationVideoDeleteModal = ({ closeModal, handleVideoDeleteButton }: PresentationVideoDeleteModalProps) => {
  return (
    <Modal closeModal={closeModal}>
      <Styled.ContentContainer>
        <Styled.TextContainer>
          <Text>삭제하면 복구할 수 없습니다.</Text>
          <Text>정말 삭제하시겠습니까?</Text>
        </Styled.TextContainer>
        <Styled.ButtonContainer>
          <Button
            width={200}
            height={52}
            backgroundColor={Theme.S_0}
            fontColor={Theme.M_1}
            onClick={handleVideoDeleteButton}
          >
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

export default PresentationVideoDeleteModal;
