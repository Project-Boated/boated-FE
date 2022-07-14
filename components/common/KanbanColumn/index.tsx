import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';

import { KanbanColumnState } from '@/lib/api/types';

import Text from '@/components/atoms/Text';
import Task from '@/components/common/Task';

import { KanbanContainer, KanbanHeader, Wrapper } from '@/components/common/KanbanColumn/style';

import Theme from '@/styles/Theme';

export interface KanbanColumnProps extends KanbanColumnState {
  index: number;
}

const KanbanColumn = ({ id, name, tasks, index }: KanbanColumnProps) => {
  return (
    <Draggable draggableId={name} index={index}>
      {(provided) => (
        <Wrapper {...provided.draggableProps} ref={provided.innerRef}>
          <KanbanHeader {...provided.dragHandleProps}>
            <Text fontSize={14} fontFamily={'Gmarket Sans'} color={Theme.S_0}>
              {name}
            </Text>
          </KanbanHeader>
          <Droppable droppableId={String(id)} type="task">
            {(provided) => (
              <KanbanContainer {...provided.droppableProps} ref={provided.innerRef}>
                <>
                  {tasks.map((task, index) => (
                    <Task key={task.id} index={index} task={task} />
                  ))}
                  {provided.placeholder}
                </>
              </KanbanContainer>
            )}
          </Droppable>
        </Wrapper>
      )}
    </Draggable>
  );
};

export default KanbanColumn;
