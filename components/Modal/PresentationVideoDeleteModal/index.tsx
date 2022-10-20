import React from 'react';

import { AxiosError } from 'axios';
import { useRouter } from 'next/router';

import { deleteProjectsKanbanTask } from '@/lib/api/projects';
import { TaskState } from '@/lib/api/types';

import Button from '@/components/atoms/Button';
import Text from '@/components/atoms/Text';


import Theme from '@/styles/Theme';

import * as Styled from './style';

import Modal from '@/components/Modal';

export interface PresentationVideoDeleteModalProps {
  closeModal: () => void;
  handleVideoDeleteButton: () => void;
}

const PresentationVideoDeleteModal = ({ closeModal, handleVideoDeleteButton }: PresentationVideoDeleteModalProps) => (
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

export default PresentationVideoDeleteModal;
