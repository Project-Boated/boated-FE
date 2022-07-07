import React, { useCallback, useState } from 'react';
import { NextPage } from 'next';
import { DragDropContext, Droppable, DropResult, resetServerContext } from 'react-beautiful-dnd';
import styled from 'styled-components';

import KanbanColumn from '@/components/common/KanbanColumn';
import AppLayoutMain from '@/components/common/Layout/AppLayoutMain';

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const KanbanTestPage: NextPage = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: '1번 레인',
      tasks: [
        {
          id: 4,
          name: 'Test Task 1',
          description: 'Test Description',
          deadline: '123',
          dday: 456,
          fileCount: 5,
        },
        {
          id: 5,
          name: 'Test Task 2',
          description: 'Test Description',
          deadline: '123',
          dday: 456,
          fileCount: 5,
        },
        {
          id: 6,
          name: 'Test Task 3',
          description: 'Test Description',
          deadline: '123',
          dday: 456,
          fileCount: 5,
        },
        {
          id: 7,
          name: 'Test Task 4',
          description: 'Test Description',
          deadline: '123',
          dday: 456,
          fileCount: 5,
        },
        {
          id: 9,
          name: 'Test Task 5',
          description: 'Test Description',
          deadline: '123',
          dday: 456,
          fileCount: 5,
        },
      ],
    },
    {
      id: 2,
      name: '2번 레인',
      tasks: [
        {
          id: 10,
          name: 'Test Task 1',
          description: 'Test Description',
          deadline: '123',
          dday: 456,
          fileCount: 5,
        },
        {
          id: 11,
          name: 'Test Task 2',
          description: 'Test Description',
          deadline: '123',
          dday: 456,
          fileCount: 5,
        },
        {
          id: 12,
          name: 'Test Task 3',
          description: 'Test Description',
          deadline: '123',
          dday: 456,
          fileCount: 5,
        },
        {
          id: 13,
          name: 'Test Task 4',
          description: 'Test Description',
          deadline: '123',
          dday: 456,
          fileCount: 5,
        },
      ],
    },
    {
      id: 3,
      name: '3번 레인',
      tasks: [
        {
          id: 14,
          name: 'Test Task 1',
          description: 'Test Description',
          deadline: '123',
          dday: 456,
          fileCount: 5,
        },
        {
          id: 15,
          name: 'Test Task 2',
          description: 'Test Description',
          deadline: '123',
          dday: 456,
          fileCount: 5,
        },
        {
          id: 16,
          name: 'Test Task 3',
          description: 'Test Description',
          deadline: '123',
          dday: 456,
          fileCount: 5,
        },
        {
          id: 17,
          name: 'Test Task 4',
          description: 'Test Description',
          deadline: '123',
          dday: 456,
          fileCount: 5,
        },
      ],
    },
    // {
    //   id: 4,
    //   name: '4번 레인',
    //   tasks: [
    //     {
    //       id: 1,
    //       name: 'Test Task 1',
    //       description: 'Test Description',
    //       deadline: '123',
    //       dday: 456,
    //       fileCount: 5,
    //     },
    //     {
    //       id: 2,
    //       name: 'Test Task 2',
    //       description: 'Test Description',
    //       deadline: '123',
    //       dday: 456,
    //       fileCount: 5,
    //     },
    //     {
    //       id: 3,
    //       name: 'Test Task 3',
    //       description: 'Test Description',
    //       deadline: '123',
    //       dday: 456,
    //       fileCount: 5,
    //     },
    //     {
    //       id: 4,
    //       name: 'Test Task 4',
    //       description: 'Test Description',
    //       deadline: '123',
    //       dday: 456,
    //       fileCount: 5,
    //     },
    //   ],
    // },
    // {
    //   id: 5,
    //   name: '5번 레인',
    //   tasks: [
    //     {
    //       id: 1,
    //       name: 'Test Task 1',
    //       description: 'Test Description',
    //       deadline: '123',
    //       dday: 456,
    //       fileCount: 5,
    //     },
    //     {
    //       id: 2,
    //       name: 'Test Task 2',
    //       description: 'Test Description',
    //       deadline: '123',
    //       dday: 456,
    //       fileCount: 5,
    //     },
    //     {
    //       id: 3,
    //       name: 'Test Task 3',
    //       description: 'Test Description',
    //       deadline: '123',
    //       dday: 456,
    //       fileCount: 5,
    //     },
    //     {
    //       id: 4,
    //       name: 'Test Task 4',
    //       description: 'Test Description',
    //       deadline: '123',
    //       dday: 456,
    //       fileCount: 5,
    //     },
    //   ],
    // },
  ]);

  const onDragEnd = useCallback(
    (result: DropResult) => {
      // draggableId는 드래그 하려는 컴포넌트의 등록해놨던 id. 여기선 task의 id
      // destination은 도착, source은 출발
      // droppableId는 컬럼의 id
      // key, id값 모두 고유해야 이상하게 작동을 안함.

      const { destination, source, draggableId, type } = result;
      if (!destination) return;
      if (destination.droppableId === source.droppableId && source.index === destination.index) return;

      if (type === 'column') {
        const newColumn = [...data];
        const targetColumn = [...newColumn.filter((column) => column.id === Number(draggableId))][0];
        newColumn.splice(source.index, 1);
        newColumn.splice(destination.index, 0, targetColumn);

        setData([...newColumn]);
        return;
      }

      const sourceColumn = [...data.filter((column) => column.id === Number(source.droppableId))][0];
      const destinationColumn = [...data.filter((column) => column.id === Number(destination.droppableId))][0];

      const sourceTaskList = [...sourceColumn.tasks];
      const destinationTaskList = [...destinationColumn.tasks];

      // 같은 컬럼에서 task 움직일때
      if (source.droppableId === destination.droppableId) {
        const targetTask = [...destinationTaskList.filter((task) => task.id === Number(draggableId))][0];
        destinationTaskList.splice(source.index, 1);
        destinationTaskList.splice(destination.index, 0, targetTask);
        setData((prev) => [
          ...prev.map((column) => {
            if (column.id === destinationColumn.id) {
              return {
                ...destinationColumn,
                tasks: destinationTaskList,
              };
            }
            return column;
          }),
        ]);
        return;
      }
      // 한 컬럼에서 다른 컬럼으로 task 이동시킬때
      const startTargetTask = [...sourceTaskList.filter((task) => task.id === Number(draggableId))][0];
      sourceTaskList.splice(source.index, 1);
      destinationTaskList.splice(destination.index, 0, startTargetTask);
      setData((prev) => [
        ...prev.map((column) => {
          if (column.id === sourceColumn.id) {
            return {
              ...sourceColumn,
              tasks: sourceTaskList,
            };
          }
          if (column.id === destinationColumn.id) {
            return {
              ...destinationColumn,
              tasks: destinationTaskList,
            };
          }
          return column;
        }),
      ]);
    },
    [data],
  );

  resetServerContext();

  console.log(data);

  return (
    <AppLayoutMain>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="all-columns" direction="horizontal" type="column">
          {(provided) => (
            <Wrapper {...provided.droppableProps} ref={provided.innerRef}>
              {data.map((data, index) => (
                <KanbanColumn key={data.id} id={data.id} name={data.name} tasks={data.tasks} index={index} />
              ))}
              {provided.placeholder}
            </Wrapper>
          )}
        </Droppable>
      </DragDropContext>
    </AppLayoutMain>
  );
};

export default KanbanTestPage;
