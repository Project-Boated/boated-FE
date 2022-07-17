import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { Story } from '@storybook/react';

import KanbanColumn, { KanbanColumnProps } from '@/components/project/Kanban/KanbanColumn';

export default {
  component: KanbanColumn,
  title: 'project/Kanban/KanbanColumn',
};

const Template: Story<KanbanColumnProps> = (args: KanbanColumnProps) => (
  <DragDropContext
    onDragEnd={() => {
      console.log('123');
    }}
  >
    <Droppable droppableId="all-columns" direction="horizontal" type="column">
      {(provided) => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          <KanbanColumn {...args} />
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </DragDropContext>
);

export const KanbanColumnExample = Template.bind({});
KanbanColumnExample.args = {
  index: 1,
  id: 1,
  name: '칸반 컬럼 제목',
  tasks: [],
};
