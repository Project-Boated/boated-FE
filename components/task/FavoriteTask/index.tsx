import React from 'react';
import { useQuery } from 'react-query';

import { getMyTaskLike } from '@/lib/api/my';

import * as queryKeys from '@/lib/constants/queryKeys';

import Text from '@/components/atoms/Text';

import FavoriteTaskItem from '@/components/task/FavoriteTask/FavoriteTaskItem';

import * as Styled from './style';

const FavoriteTask = () => {
  const { data } = useQuery(queryKeys.MY_TASK_LIKE, () => getMyTaskLike());

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
      <Styled.BodyContainer>
        {data && data.taskLikes.map((like) => <FavoriteTaskItem project={like.project} task={like.task} />)}
      </Styled.BodyContainer>
    </Styled.Container>
  );
};

export default FavoriteTask;
