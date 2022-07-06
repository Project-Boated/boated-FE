import React from 'react';
import { Droppable } from 'react-beautiful-dnd';

import { KanbanColumnState } from '@/lib/api/types';

import Text from '@/components/atoms/Text';
import Task from '@/components/common/Task';

import { KanbanContainer, KanbanHeader, Wrapper } from '@/components/common/KanbanColumn/style';

import Theme from '@/styles/Theme';

const KanbanColumn = ({ id, name, tasks }: KanbanColumnState) => {
  return (
    <Wrapper>
      <KanbanHeader>
        <Text fontSize={14} fontFamily={'Gmarket Sans'} color={Theme.S_0}>
          {name}
        </Text>
      </KanbanHeader>
      <Droppable droppableId={String(id)}>
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
  );
};

export default KanbanColumn;
