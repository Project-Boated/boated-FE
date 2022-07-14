import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { Story } from '@storybook/react';

import Task, { TaskProps } from '@/components/common/Task';

export default {
  component: Task,
  title: 'common/Task',
};

const Template: Story<TaskProps> = (args: TaskProps) => (
  <DragDropContext
    onDragEnd={() => {
      console.log('123');
    }}
  >
    <Droppable droppableId="task" type="task">
      {(provided) => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          <Task {...args} />
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </DragDropContext>
);

export const TaskExample = Template.bind({});
TaskExample.args = {
  index: 1,
  task: {
    id: 1,
    name: 'Task 제목입니다.',
    description: 'Task 설명입니다',
    deadline: '2022.07.21.',
    dday: 3,
    fileCount: 5,
    assignedAccounts: [
      { id: 1, nickname: '박성호' },
      {
        id: 2,
        nickname: '윤준서',
      },
      {
        id: 3,
        nickname: '계대환',
      },
      {
        id: 4,
        nickname: '김범준',
      },
    ],
  },
};
