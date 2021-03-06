import React, { useCallback, useState } from 'react';
import { NextPage } from 'next';
import { DragDropContext, Droppable, DropResult, resetServerContext } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { useQuery } from 'react-query';

import * as queryKeys from '@/lib/constants/queryKeys';
import { getProjectsKanban, postProjectsKanbanLaneChange, postProjectsTaskChange } from '@/lib/api/projects';

import useModal from '@/hooks/useModal';

import Text from '@/components/atoms/Text';
import Button from '@/components/atoms/Button';

import AppLayoutMain from '@/components/common/Layout/AppLayoutMain';
import Modal from '@/components/common/Modal';

import KanbanColumn from '@/components/project/Kanban/KanbanColumn';

const Wrapper = styled.div`
  margin-top: 50px;
`;

const KanbanWrapper = styled.div`
  max-width: 1045px;

  overflow-x: auto;
`;

const Container = styled.div`
  display: flex;
  gap: 20px;
`;

const TaskTextWrapper = styled.div`
  margin-bottom: 20px;
`;

const ButtonWrapper = styled.div`
  margin-top: 28px;

  float: right;
`;

const KanbanTestPage: NextPage = () => {
  const projectId = 1;

  const { isShowModal, closeModal, openModal } = useModal();

  const {
    isLoading,
    error,
    data: kanbanData,
  } = useQuery(`${queryKeys.PROJECTS_KANBAN}/${projectId}`, () => getProjectsKanban(projectId));

  console.log(kanbanData);

  // const [data, setData] = useState(kanbanData);

  const [data, setData] = useState([
    {
      id: 1,
      name: 'READY',
      tasks: [
        {
          id: 4,
          name: 'Test Task 1ㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇ',
          description: 'Test Description ㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㅇㄴ',
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
        {
          id: 5,
          name: 'Test Task 2',
          description: 'Test Description',
          deadline: '123',
          dday: 456,
          fileCount: 5,
          assignedAccounts: [
            { id: 1, nickname: '박성호' },
            {
              id: 2,
              nickname: '윤준서',
            },
          ],
        },
        {
          id: 6,
          name: 'Test Task 3',
          description: 'Test Description',
          deadline: '123',
          dday: 456,
          fileCount: 5,
          assignedAccounts: [
            { id: 1, nickname: '박성호' },
            {
              id: 2,
              nickname: '윤준서',
            },
          ],
        },
        {
          id: 7,
          name: 'Test Task 4',
          description: 'Test Description',
          deadline: '123',
          dday: 456,
          fileCount: 5,
          assignedAccounts: [
            { id: 1, nickname: '박성호' },
            {
              id: 2,
              nickname: '윤준서',
            },
          ],
        },
        {
          id: 9,
          name: 'Test Task 5',
          description: 'Test Description',
          deadline: '123',
          dday: 456,
          fileCount: 5,
          assignedAccounts: [
            { id: 1, nickname: '박성호' },
            {
              id: 2,
              nickname: '윤준서',
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: 'PROCESS',
      tasks: [
        {
          id: 10,
          name: 'Test Task 1',
          description: 'Test Description',
          deadline: '123',
          dday: 456,
          fileCount: 5,
          assignedAccounts: [
            { id: 1, nickname: '박성호' },
            {
              id: 2,
              nickname: '윤준서',
            },
          ],
        },
        {
          id: 11,
          name: 'Test Task 2',
          description: 'Test Description',
          deadline: '123',
          dday: 456,
          fileCount: 5,
          assignedAccounts: [
            { id: 1, nickname: '박성호' },
            {
              id: 2,
              nickname: '윤준서',
            },
          ],
        },
        {
          id: 12,
          name: 'Test Task 3',
          description: 'Test Description',
          deadline: '123',
          dday: 456,
          fileCount: 5,
          assignedAccounts: [
            { id: 1, nickname: '박성호' },
            {
              id: 2,
              nickname: '윤준서',
            },
          ],
        },
        {
          id: 13,
          name: 'Test Task 4',
          description: 'Test Description',
          deadline: '123',
          dday: 456,
          fileCount: 5,
          assignedAccounts: [
            { id: 1, nickname: '박성호' },
            {
              id: 2,
              nickname: '윤준서',
            },
          ],
        },
      ],
    },
    {
      id: 3,
      name: 'CHECKING',
      tasks: [
        {
          id: 14,
          name: 'Test Task 1',
          description: 'Test Description',
          deadline: '123',
          dday: 456,
          fileCount: 5,
          assignedAccounts: [
            { id: 1, nickname: '박성호' },
            {
              id: 2,
              nickname: '윤준서',
            },
          ],
        },
        {
          id: 15,
          name: 'Test Task 2',
          description: 'Test Description',
          deadline: '123',
          dday: 456,
          fileCount: 5,
          assignedAccounts: [
            { id: 1, nickname: '박성호' },
            {
              id: 2,
              nickname: '윤준서',
            },
          ],
        },
        {
          id: 16,
          name: 'Test Task 3',
          description: 'Test Description',
          deadline: '123',
          dday: 456,
          fileCount: 5,
          assignedAccounts: [
            { id: 1, nickname: '박성호' },
            {
              id: 2,
              nickname: '윤준서',
            },
          ],
        },
      ],
    },
    {
      id: 4,
      name: 'COMPLETE',
      tasks: [
        {
          id: 17,
          name: 'Test Task 1',
          description: 'Test Description',
          deadline: '123',
          dday: 456,
          fileCount: 5,
          assignedAccounts: [
            { id: 1, nickname: '박성호' },
            {
              id: 2,
              nickname: '윤준서',
            },
          ],
        },
        {
          id: 18,
          name: 'Test Task 2',
          description: 'Test Description',
          deadline: '123',
          dday: 456,
          fileCount: 5,
          assignedAccounts: [
            { id: 1, nickname: '박성호' },
            {
              id: 2,
              nickname: '윤준서',
            },
          ],
        },
      ],
    },
    {
      id: 5,
      name: '미공개',
      tasks: [
        {
          id: 19,
          name: 'Test Task 1',
          description: 'Test Description',
          deadline: '123',
          dday: 456,
          fileCount: 5,
          assignedAccounts: [
            { id: 1, nickname: '박성호' },
            {
              id: 2,
              nickname: '윤준서',
            },
          ],
        },
        {
          id: 20,
          name: 'Test Task 2',
          description: 'Test Description',
          deadline: '123',
          dday: 456,
          fileCount: 5,
          assignedAccounts: [
            { id: 1, nickname: '박성호' },
            {
              id: 2,
              nickname: '윤준서',
            },
          ],
        },
      ],
    },
  ]);

  const onDragEnd = useCallback(
    async (result: DropResult) => {
      // draggableId는 드래그 하려는 컴포넌트의 등록해놨던 id. 여기선 task의 id
      // destination은 도착, source은 출발
      // droppableId는 컬럼의 id
      // key, id값 모두 고유해야 이상하게 작동을 안함.
      // 그래서 column의 id는 name으로 해주었다.

      const { destination, source, draggableId, type } = result;

      if (!destination) return;
      if (destination.droppableId === source.droppableId && source.index === destination.index) return;

      // 컬럼 자를 움직일때
      if (type === 'column') {
        const newColumn = [...data];
        const targetColumn = [...newColumn.filter((column) => column.name === draggableId)][0];
        newColumn.splice(source.index, 1);
        newColumn.splice(destination.index, 0, targetColumn);

        setData([...newColumn]);

        await postProjectsKanbanLaneChange({
          id: projectId,
          originalIndex: source.index,
          changeIndex: destination.index,
        });
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

        await postProjectsTaskChange({
          projectId,
          laneId: Number(source.droppableId),
          originalIndex: source.index,
          changeIndex: destination.index,
        });
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

  // if (error) {
  //   return <div>error</div>;
  // }

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <>
      <AppLayoutMain>
        <Wrapper>
          <TaskTextWrapper>
            <Text fontSize={20}>Task</Text>
          </TaskTextWrapper>
          <KanbanWrapper>
            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId="all-columns" direction="horizontal" type="column">
                {(provided) => (
                  <Container {...provided.droppableProps} ref={provided.innerRef}>
                    {data.map((column, index) => (
                      <KanbanColumn
                        key={column.id}
                        id={column.id}
                        name={column.name}
                        tasks={column.tasks}
                        index={index}
                        dataLength={data.length}
                      />
                    ))}
                    {provided.placeholder}
                  </Container>
                )}
              </Droppable>
            </DragDropContext>
          </KanbanWrapper>
          <ButtonWrapper>
            <Button width={200} height={52} onClick={openModal}>
              Task 추가하기
            </Button>
          </ButtonWrapper>
        </Wrapper>
      </AppLayoutMain>
      {isShowModal && <Modal closeModal={closeModal}>Example</Modal>}
    </>
  );
};

export default KanbanTestPage;
