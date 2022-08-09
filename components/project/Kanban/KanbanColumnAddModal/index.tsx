import React, { useState } from 'react';

import { postProjectsKanbanLane } from '@/lib/api/projects';

import Button from '@/components/atoms/Button';
import Text from '@/components/atoms/Text';
import Modal from '@/components/common/Modal';
import Input from '@/components/atoms/Input';

import * as Styled from './style';

export interface KanbanColumnAddModal {
  closeModal: () => void;
}

const KanbanColumnAddModal = ({ closeModal }: KanbanColumnAddModal) => {
  const projectId = 1;

  const [kanbanName, setKanbanName] = useState('');

  const onChangeKanbanColumnName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKanbanName(e.target.value);
  };

  const onClickColumnAdd = async () => {
    await postProjectsKanbanLane({ projectId, name: kanbanName });
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
            placeholder="새로운 레인의 이름을 입력해주세요."
            value={kanbanName}
            onChange={onChangeKanbanColumnName}
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
