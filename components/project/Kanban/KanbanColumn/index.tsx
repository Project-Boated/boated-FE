import React, { useState } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';

import { KanbanColumnState } from '@/lib/api/types';

import useModal from '@/hooks/useModal';

import Text from '@/components/atoms/Text';
import Icon from '@/components/atoms/Icon';

import KanbanColumnDeleteModal from '@/components/common/Modal/KanbanColumnDeleteModal';

import Task from '@/components/project/Kanban/Task';

import Theme from '@/styles/Theme';

import * as Styled from './style';

export interface KanbanColumnProps extends KanbanColumnState {
  index: number;
  kanbanDataLength?: number;
}

const KanbanColumn = ({ id, name, tasks, index, kanbanDataLength }: KanbanColumnProps) => {
  const [isIconVisible, setIsIconVisible] = useState(false);

  const { isShowModal, closeModal, openModal } = useModal();

  return (
    <>
      {isShowModal && (
        <KanbanColumnDeleteModal
          kanbanLaneId={id}
          columnName={name}
          taskDataLength={tasks.length}
          closeModal={closeModal}
        />
      )}
      <Draggable draggableId={name} index={index}>
        {(provided) => (
          <Styled.Container {...provided.draggableProps} ref={provided.innerRef}>
            <Styled.KanbanHeader
              {...provided.dragHandleProps}
              onMouseEnter={() => setIsIconVisible(true)}
              onMouseLeave={() => setIsIconVisible(false)}
            >
              {isIconVisible && kanbanDataLength !== 1 && (
                <Styled.IconWrapper onClick={openModal}>
                  <Icon icon="KanbanColumnDelete" />
                </Styled.IconWrapper>
              )}
              <Text fontSize={14} fontFamily={'Gmarket Sans'} color={Theme.S_0}>
                {name}
              </Text>
            </Styled.KanbanHeader>
            <Droppable droppableId={String(id)} type="task">
              {(provided) => (
                <Styled.KanbanContainer {...provided.droppableProps} ref={provided.innerRef}>
                  <>
                    {tasks.map((task, index) => (
                      <Task key={task.id} index={index} task={task} />
                    ))}
                    {provided.placeholder}
                  </>
                </Styled.KanbanContainer>
              )}
            </Droppable>
          </Styled.Container>
        )}
      </Draggable>
    </>
  );
};

export default KanbanColumn;
