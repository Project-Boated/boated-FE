import React, { useState } from 'react';

import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { AxiosError } from 'axios';
import { useQueryClient } from 'react-query';

import { postProjectsKanbanLane } from '@/lib/api/projects';

import * as queryKeys from '@/lib/constants/queryKeys';

import Button from '@/components/atoms/Button';
import Input from '@/components/atoms/Input';
import Text from '@/components/atoms/Text';

import * as Styled from './style';

import Modal from '@/components/Modal';


export interface KanbanColumnAddModalProps {
  closeModal: () => void;
}

const KanbanColumnAddModal = ({ closeModal }: KanbanColumnAddModalProps) => {
  const router = useRouter();
  const projectId = parseInt(router.query.id as string, 10);

  const queryClient = useQueryClient();

  const [kanbanName, setKanbanName] = useState('');

  const onChangeKanbanColumnName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKanbanName(e.target.value);
  };

  const onClickColumnAdd = async () => {
    try {
      await postProjectsKanbanLane({ projectId, name: kanbanName });
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
        <Styled.TextInputContainer>
          <Text>칸반 레인 추가</Text>
          <Input
            type="text"
            id="lane-name"
            name="lane-name"
            width={566}
            height={40}
            placeholder="새로운 레인의 이름을 입력해주세요. (최대 15자)"
            value={kanbanName}
            onChange={onChangeKanbanColumnName}
            maxLength={15}
          />
        </Styled.TextInputContainer>

        <Styled.ButtonContainer>
          <Button width={200} height={52} onClick={onClickColumnAdd}>
            레인 추가하기
          </Button>
        </Styled.ButtonContainer>
      </Styled.ContentContainer>
    </Modal>
  );
};

export default KanbanColumnAddModal;
