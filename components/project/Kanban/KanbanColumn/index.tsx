import React, { useCallback, useMemo } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';

import { KanbanColumnState } from '@/lib/api/types';

import Text from '@/components/atoms/Text';
import Icon from '@/components/atoms/Icon';

import Task from '@/components/project/Kanban/Task';

import Theme from '@/styles/Theme';

import * as Styled from './style';

export interface KanbanColumnProps extends KanbanColumnState {
  index: number;
  dataLength?: number;
}

const KanbanColumn = ({ id, name, tasks, index, dataLength }: KanbanColumnProps) => {
  const isCustomLane = useMemo(() => {
    if (name === 'READY' || name === 'PROCESS' || name === 'CHECKING' || name === 'COMPLETE') {
      return false;
    }
    return true;
  }, [name]);

  return (
    <Draggable draggableId={name} index={index}>
      {(provided) => (
        <Styled.Container {...provided.draggableProps} ref={provided.innerRef}>
          <Styled.KanbanHeader {...provided.dragHandleProps}>
            {dataLength === 4 && index === 3 && (
              <Styled.IconWrapper>
                <Icon icon="KanbanColumndAdd" />
              </Styled.IconWrapper>
            )}
            {isCustomLane && (
              <Styled.IconWrapper>
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
  );
};

export default KanbanColumn;
