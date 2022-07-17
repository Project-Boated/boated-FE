import React, { useCallback } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';

import { KanbanColumnState } from '@/lib/api/types';

import Text from '@/components/atoms/Text';
import Icon from '@/components/atoms/Icon';

import Task from '@/components/project/Kanban/Task';

import * as Styled from './style';

import Theme from '@/styles/Theme';

export interface KanbanColumnProps extends KanbanColumnState {
  index: number;
  dataLength?: number;
}

const KanbanColumn = ({ id, name, tasks, index, dataLength }: KanbanColumnProps) => {
  const isCustomLane = useCallback((columnName: string) => {
    if (columnName === 'READY' || columnName === 'PROCESS' || columnName === 'CHECKING' || columnName === 'COMPLETE') {
      return false;
    }
    return true;
  }, []);

  return (
    <Draggable draggableId={name} index={index}>
      {(provided) => (
        <Styled.Wrapper {...provided.draggableProps} ref={provided.innerRef}>
          <Styled.KanbanHeader {...provided.dragHandleProps}>
            {dataLength === 4 && index === 3 && (
              <Styled.IconContainer>
                <Icon icon="KanbanColumndAdd" />
              </Styled.IconContainer>
            )}
            {isCustomLane(name) && (
              <Styled.IconContainer>
                <Icon icon="KanbanColumnDelete" />
              </Styled.IconContainer>
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
        </Styled.Wrapper>
      )}
    </Draggable>
  );
};

export default KanbanColumn;
