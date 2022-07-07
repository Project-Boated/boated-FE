import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

import { TaskState } from '@/lib/api/types';

import { Wrapper } from '@/components/common/Task/style';

interface TaskProps {
  index: number;
  task: TaskState;
}

const Task = ({ index, task }: TaskProps) => {
  return (
    <Draggable draggableId={String(task.id)} index={index}>
      {(provided) => (
        <Wrapper {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
          {task.name}
        </Wrapper>
      )}
    </Draggable>
  );
};

export default React.memo(Task);
