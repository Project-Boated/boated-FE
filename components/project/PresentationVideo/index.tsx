import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useRouter } from 'next/router';
import { AxiosError } from 'axios';

import { deleteProjectsVideo, getProjectsVideo } from '@/lib/api/projects';
import * as queryKeys from '@/lib/constants/queryKeys';

import Icon from '@/components/atoms/Icon';
import Text from '@/components/atoms/Text';
import Button from '@/components/atoms/Button';

import VideoDescription from '@/components/project/PresentationVideo/VideoDescription';
import FileDragDropInput from '@/components/project/PresentationVideo/FileDragDropInput';

import * as Styled from './style';

const PresentationVideo = () => {
  const router = useRouter();
  const projectId = parseInt(router.query.id as string, 10);

  const { data, isLoading, remove, refetch, isError, isFetched, isFetching } = useQuery(
    `${queryKeys.PROJECTS_VIDEO}/${projectId}`,
    () => getProjectsVideo(projectId),
    {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  );

  const handleVideoDeleteButton = async () => {
    try {
      await deleteProjectsVideo(projectId);
      remove();
      refetch();
    } catch (e: unknown) {
      const error = e as AxiosError;
      alert(JSON.stringify(error.response?.data.message));
    }
  };

  return (
    <Styled.Container>
      <Styled.H1>발표 영상</Styled.H1>
      <Styled.PresentationContainer>
        {isLoading && <Styled.LoadingWrapper>Loading...</Styled.LoadingWrapper>}
        {!data && !isLoading && <FileDragDropInput />}
        {data && <Styled.PresentationVideo src="/api/projects/5/video" controls autoPlay={false} />}
        {/* {data ? (
          <Styled.PresentationVideo src="/api/projects/5/video" controls autoPlay={false} />
        ) : (
          <FileDragDropInput />
        )} */}
        <VideoDescription />
      </Styled.PresentationContainer>
      {data && (
        <Styled.VideoInfoContainer>
          <Icon width={20} height={20} icon="BoatedSymbol" />
          <Text>파일 용량 : {Math.ceil(Number(data?.headers['content-length']) / 1000000)}MB</Text>
          <Button width={86} height={32} borderRadius={26} onClick={handleVideoDeleteButton}>
            삭제하기
          </Button>
        </Styled.VideoInfoContainer>
      )}
    </Styled.Container>
  );
};

export default PresentationVideo;
