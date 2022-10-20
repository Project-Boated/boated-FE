import React, { useState } from 'react';

import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

import { deleteProjectsVideo, getProjectsVideo, putProjectsVideoDescription } from '@/lib/api/projects';
import * as queryKeys from '@/lib/constants/queryKeys';

import useModal from '@/hooks/useModal';

import Button from '@/components/atoms/Button';
import Icon from '@/components/atoms/Icon';
import Text from '@/components/atoms/Text';

import PresentationVideoDeleteModal from '@/components/Modal/PresentationVideoDeleteModal';

import FileDragDropInput from '@/components/project/PresentationVideo/FileDragDropInput';
import VideoDescription from '@/components/project/PresentationVideo/VideoDescription';


import * as Styled from './style';

const PresentationVideo = () => {
  const router = useRouter();
  const projectId = parseInt(router.query.id as string, 10);

  const [description, setDescription] = useState<string>('');

  const { isShowModal, closeModal, openModal } = useModal();

  const { data, isLoading, remove, refetch } = useQuery(
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
      closeModal();
    } catch (e: unknown) {
      const error = e as AxiosError;
      alert(JSON.stringify(error.response?.data.message));
    }
  };

  const handleVideoDescriptionButton = async () => {
    try {
      await putProjectsVideoDescription({ projectId, description });
    } catch (e: unknown) {
      const error = e as AxiosError;
      alert(JSON.stringify(error.response?.data.message));
    }
  };

  return (
    <Styled.Container>
      {isShowModal && (
        <PresentationVideoDeleteModal closeModal={closeModal} handleVideoDeleteButton={handleVideoDeleteButton} />
      )}
      <Styled.H1>발표 영상</Styled.H1>
      <Styled.PresentationContainer>
        {isLoading && <Styled.LoadingWrapper>Loading...</Styled.LoadingWrapper>}
        {!data && !isLoading && <FileDragDropInput />}
        {data && <Styled.PresentationVideo src={`/api/projects/${projectId}/video`} controls autoPlay={false} />}
        <VideoDescription description={description} setDescription={setDescription} />
      </Styled.PresentationContainer>
      <Styled.ButtonContainer>
        {data && (
          <>
            <Styled.VideoInfoContainer>
              <Icon width={20} height={20} icon="BoatedSymbol" />
              <Text>파일 용량 : {Math.ceil(Number(data?.headers['content-length']) / 1000000)}MB</Text>
              <Button width={86} height={32} borderRadius={26} onClick={openModal}>
                삭제하기
              </Button>
            </Styled.VideoInfoContainer>
            <Button width={200} height={53} borderRadius={6} onClick={handleVideoDescriptionButton}>
              저장하기
            </Button>
          </>
        )}
      </Styled.ButtonContainer>
    </Styled.Container>
  );
};

export default PresentationVideo;
