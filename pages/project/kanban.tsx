import React, { useCallback } from 'react';
import { NextPage } from 'next';
import { DragDropContext } from 'react-beautiful-dnd';
import styled from 'styled-components';

import KanbanColumn from '@/components/common/KanbanColumn';
import AppLayoutMain from '@/components/common/Layout/AppLayoutMain';

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const KanbanTestPage: NextPage = () => {
  const testData = [
    {
      id: 1,
      name: '1번 레인',
      tasks: [
        {
          id: 1,
          name: 'Test Task 1',
          description: 'Test Description',
          deadline: '123',
          dday: 456,
          fileCount: 5,
        },
        {
          id: 2,
          name: 'Test Task 2',
          description: 'Test Description',
          deadline: '123',
          dday: 456,
          fileCount: 5,
        },
        {
          id: 3,
          name: 'Test Task 3',
          description: 'Test Description',
          deadline: '123',
          dday: 456,
          fileCount: 5,
        },
        {
          id: 4,
          name: 'Test Task 4',
          description: 'Test Description',
          deadline: '123',
          dday: 456,
          fileCount: 5,
        },
        {
          id: 5,
          name: 'Test Task 4',
          description: 'Test Description',
          deadline: '123',
          dday: 456,
          fileCount: 5,
        },
      ],
    },
    // {
    //   id: 2,
    //   name: '2번 레인',
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
    //   id: 3,
    //   name: '3번 레인',
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
  ];

  const onDragEnd = useCallback((result: any) => {
    // TODO: reorder our column
  }, []);

  return (
    <AppLayoutMain>
      <Wrapper>
        <DragDropContext onDragEnd={onDragEnd}>
          {testData.map((data) => (
            <KanbanColumn key={data.id} id={data.id} name={data.name} tasks={data.tasks} />
          ))}
        </DragDropContext>
      </Wrapper>
    </AppLayoutMain>
  );
};

export default KanbanTestPage;
