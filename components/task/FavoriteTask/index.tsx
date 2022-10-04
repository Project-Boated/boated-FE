import React, { useCallback, useEffect, useState } from 'react';

import { AxiosError } from 'axios';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { useQuery } from 'react-query';

import { getMyTaskLike, postMyTaskLikeChange } from '@/lib/api/my';
import { GetMyTaskLikeResponse } from '@/lib/api/types';
import * as queryKeys from '@/lib/constants/queryKeys';

import Text from '@/components/atoms/Text';
import FavoriteTaskItem from '@/components/task/FavoriteTask/FavoriteTaskItem';

import * as Styled from './style';

const FavoriteTask = () => {
  const { data: queryData, refetch } = useQuery(queryKeys.MY_TASK_LIKES, () => getMyTaskLike());

  const [data, setData] = useState<GetMyTaskLikeResponse | undefined>();

  useEffect(() => {
    setData(queryData);
  }, [queryData]);

  const onDragEnd = useCallback(
    async (result: DropResult) => {
      const { destination, source, draggableId } = result;

      if (!data) return;
      if (!destination) return;
      if (destination.droppableId === source.droppableId && source.index === destination.index) return;

      const changedData = [...data.taskLikes];
      const targetTask = changedData.filter((like) => like.task.id === Number(draggableId))[0];

      changedData.splice(source.index, 1);
      changedData.splice(destination.index, 0, targetTask);

      setData({ taskLikes: changedData });

      try {
        await postMyTaskLikeChange({ originalIndex: source.index, changeIndex: destination.index });
        refetch();
      } catch (e: unknown) {
        const error = e as AxiosError;
        alert(JSON.stringify(error.response?.data.message));
      }
    },
    [data],
  );

  return (
    <Styled.Container>
      <Styled.HeaderWrapper>
        <Styled.HeaderTr>
          <th>
            <Text fontFamily="Gmarket Sans" fontSize={12} fontWeight={400}>
              프로젝트명
            </Text>
          </th>
          <th>
            <Text fontFamily="Gmarket Sans" fontSize={12} fontWeight={400}>
              Task
            </Text>
          </th>
          <th>
            <Text fontFamily="Gmarket Sans" fontSize={12} fontWeight={400}>
              마감기한
            </Text>
          </th>
          <th>
            <Text fontFamily="Gmarket Sans" fontSize={12} fontWeight={400}>
              배정된 팀원
            </Text>
          </th>
        </Styled.HeaderTr>
      </Styled.HeaderWrapper>
      {data && (
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="column" type="FavoriteTask" direction="vertical">
            {(provided) => (
              <Styled.BodyWrapper {...provided.droppableProps} ref={provided.innerRef}>
                <Styled.BodyContainer>
                  {data.taskLikes.map((like, index) => (
                    <FavoriteTaskItem key={like.task.id} project={like.project} task={like.task} taskIndex={index} />
                  ))}
                  {provided.placeholder}
                </Styled.BodyContainer>
              </Styled.BodyWrapper>
            )}
          </Droppable>
        </DragDropContext>
      )}
    </Styled.Container>
  );
};

export default FavoriteTask;
