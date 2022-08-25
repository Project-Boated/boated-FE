import React, { useCallback, useState } from 'react';
import { DragDropContext, Droppable, DropResult, resetServerContext } from 'react-beautiful-dnd';
import { useQuery } from 'react-query';
import { useRouter } from 'next/router';
import { AxiosError } from 'axios';

import { getProjectsKanban, postProjectsKanbanLaneChange, postProjectsKanbanTaskChange } from '@/lib/api/projects';

import * as queryKeys from '@/lib/constants/queryKeys';

import useModal from '@/hooks/useModal';

import Text from '@/components/atoms/Text';
import Button from '@/components/atoms/Button';
import Icon from '@/components/atoms/Icon';

import KanbanColumnAddModal from '@/components/Modal/KanbanColumnAddModal';
import TaskCreateModal from '@/components/Modal/TaskCreateModal';

import KanbanColumn from '@/components/project/Kanban/KanbanColumn';

import * as Styled from './style';

const Kanban = () => {
  const router = useRouter();
  const projectId = parseInt(router.query.id as string, 10);

  const {
    isShowModal: isShowKanbanColumnAddModal,
    openModal: openKanbanColumnAddModal,
    closeModal: closeKanbanColumnAddModal,
  } = useModal();

  const {
    isShowModal: isShowTaskCreateModal,
    openModal: openTaskCreateModal,
    closeModal: closeTaskCreateModal,
  } = useModal();

  const { isLoading, error, data } = useQuery(`${queryKeys.PROJECTS_KANBAN}/${projectId}`, () =>
    getProjectsKanban(projectId),
  );

  // const [data, setData] = useState<Array<KanbanState>(kanbanData);

  const onDragEnd = useCallback(
    async (result: DropResult) => {
      // draggableId는 드래그 하려는 컴포넌트의 등록해놨던 id. 여기선 task의 id
      // destination은 도착, source은 출발
      // droppableId는 컬럼의 id
      // key, id값 모두 고유해야 이상하게 작동을 안함.
      // 그래서 column의 id는 name으로 해주었다.

      const { destination, source, draggableId, type } = result;

      if (!data) return;
      if (!destination) return;
      if (destination.droppableId === source.droppableId && source.index === destination.index) return;

      // 컬럼을 움직일때
      if (type === 'column') {
        const newColumn = [...data];
        const targetColumn = [...newColumn.filter((column) => column.name === draggableId)][0];
        newColumn.splice(source.index, 1);
        newColumn.splice(destination.index, 0, targetColumn);

        // setData([...newColumn]);

        try {
          await postProjectsKanbanLaneChange({
            projectId,
            originalIndex: source.index,
            changeIndex: destination.index,
          });
        } catch (e: unknown) {
          const error = e as AxiosError;
          alert(JSON.stringify(error.response?.data.message));
        }

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

        // setData((prev) => [
        //   ...prev.map((column) => {
        //     if (column.id === destinationColumn.id) {
        //       return {
        //         ...destinationColumn,
        //         tasks: destinationTaskList,
        //       };
        //     }
        //     return column;
        //   }),
        // ]);

        try {
          await postProjectsKanbanTaskChange({
            projectId,
            originalLaneId: Number(source.droppableId),
            originalTaskIndex: source.index,
            changeLaneId: Number(destination.droppableId),
            changeTaskIndex: destination.index,
          });
        } catch (e: unknown) {
          const error = e as AxiosError;
          alert(JSON.stringify(error.response?.data.message));
        }

        return;
      }
      // 한 컬럼에서 다른 컬럼으로 task 이동시킬때
      const startTargetTask = [...sourceTaskList.filter((task) => task.id === Number(draggableId))][0];
      sourceTaskList.splice(source.index, 1);
      destinationTaskList.splice(destination.index, 0, startTargetTask);
      // setData((prev) => [
      //   ...prev.map((column) => {
      //     if (column.id === sourceColumn.id) {
      //       return {
      //         ...sourceColumn,
      //         tasks: sourceTaskList,
      //       };
      //     }
      //     if (column.id === destinationColumn.id) {
      //       return {
      //         ...destinationColumn,
      //         tasks: destinationTaskList,
      //       };
      //     }
      //     return column;
      //   }),
      // ]);

      try {
        await postProjectsKanbanTaskChange({
          projectId,
          originalLaneId: Number(source.droppableId),
          originalTaskIndex: source.index,
          changeLaneId: Number(destination.droppableId),
          changeTaskIndex: destination.index,
        });
      } catch (e: unknown) {
        const error = e as AxiosError;
        alert(JSON.stringify(error.response?.data.message));
      }
    },
    [data],
  );

  resetServerContext();

  if (error) {
    return <div>error</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Styled.Container>
      {data && (
        <>
          {isShowKanbanColumnAddModal && <KanbanColumnAddModal closeModal={closeKanbanColumnAddModal} />}
          {isShowTaskCreateModal && router.isReady && <TaskCreateModal closeModal={closeTaskCreateModal} />}
          <Styled.TaskHeaderContainer>
            <Styled.H1>Task</Styled.H1>
            {data.length < 5 && (
              <Styled.ColumnAddContainer onClick={openKanbanColumnAddModal}>
                <Text fontSize={14}>레인 추가하기</Text>
                <Icon width={24} height={24} icon="KanbanColumnAdd" />
              </Styled.ColumnAddContainer>
            )}
          </Styled.TaskHeaderContainer>
          <Styled.KanbanContainer>
            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId="all-columns" direction="horizontal" type="column">
                {(provided) => (
                  <Styled.ColumnWrapper {...provided.droppableProps} ref={provided.innerRef}>
                    {data.map((column, index) => (
                      <KanbanColumn
                        key={column.id}
                        id={column.id}
                        name={column.name}
                        tasks={column.tasks}
                        index={index}
                        kanbanDataLength={data.length}
                      />
                    ))}
                    {provided.placeholder}
                  </Styled.ColumnWrapper>
                )}
              </Droppable>
            </DragDropContext>
          </Styled.KanbanContainer>
          <Styled.ButtonWrapper>
            <Button width={200} height={52} onClick={openTaskCreateModal}>
              Task 추가하기
            </Button>
          </Styled.ButtonWrapper>
        </>
      )}
    </Styled.Container>
  );
};

export default Kanban;
