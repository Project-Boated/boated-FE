import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { Story } from '@storybook/react';

import FavoriteTaskItem, { FavoriteTaskItemProps } from '.';

export default {
  component: FavoriteTaskItem,
  title: 'task/FavoriteTaskItem',
};

const Template: Story<FavoriteTaskItemProps> = (args: FavoriteTaskItemProps) => (
  <DragDropContext
    onDragEnd={() => {
      console.log('123');
    }}
  >
    <Droppable droppableId="task" type="task">
      {(provided) => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          <FavoriteTaskItem {...args} />
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </DragDropContext>
);

export const Default = Template.bind({});
Default.args = {
  project: {
    id: 1,
    name: '프로젝트 이름',
    description: '프로젝트 설명',
    dday: 1,
    deadline: 'deadline',
    totalDay: 1,
    terminated: false,
  },
  task: {
    id: 1,
    name: 'task 이름',
    description: 'task 설명',
    dday: 1,
    deadline: 'deadline',
    fileCount: 1,
    assignedAccounts: [],
  },
  taskIndex: 0,
};
