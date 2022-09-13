import React, { useCallback, useEffect, useRef, useState } from 'react';
import { AxiosError } from 'axios';
import { useQueryClient } from 'react-query';
import { useRouter } from 'next/router';

import { putProjectsVideo } from '@/lib/api/projects';
import * as queryKeys from '@/lib/constants/queryKeys';

import Icon from '@/components/atoms/Icon';
import Text from '@/components/atoms/Text';

import Theme from '@/styles/Theme';

import * as Styled from './style';

const FileDragDropInput = () => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const dragRef = useRef<HTMLLabelElement | null>(null);

  const router = useRouter();
  const projectId = parseInt(router.query.id as string, 10);

  const [isUploading, setIsUploading] = useState<boolean>(false);

  const queryClient = useQueryClient();

  const onChangeFile = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement> | any) => {
      const videoFormData = new FormData();

      if (e.type === 'drop') {
        videoFormData.append('file', e.dataTransfer.files['0']);
      } else {
        videoFormData.append('file', e.target.files['0']);
      }

      try {
        setIsUploading(true);
        await putProjectsVideo({ videoFormData, projectId });
        queryClient.invalidateQueries(`${queryKeys.PROJECTS_VIDEO}/${projectId}`);
        setIsUploading(false);
      } catch (e: unknown) {
        const error = e as AxiosError;
        alert(JSON.stringify(error.response?.data.message));
      }
    },
    [projectId],
  );

  const handleDragIn = useCallback((e: DragEvent): void => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragOut = useCallback((e: DragEvent): void => {
    e.preventDefault();
    e.stopPropagation();

    setIsDragging(false);
  }, []);

  const handleDragOver = useCallback((e: DragEvent): void => {
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer!.files) {
      setIsDragging(true);
    }
  }, []);

  const handleDrop = useCallback(
    (e: DragEvent): void => {
      e.preventDefault();
      e.stopPropagation();

      onChangeFile(e);
      setIsDragging(false);
    },
    [onChangeFile],
  );

  const initDragEvents = useCallback((): void => {
    // 앞서 말했던 4개의 이벤트에 Listener를 등록합니다. (마운트 될때)

    if (dragRef.current !== null) {
      dragRef.current.addEventListener('dragenter', handleDragIn);
      dragRef.current.addEventListener('dragleave', handleDragOut);
      dragRef.current.addEventListener('dragover', handleDragOver);
      dragRef.current.addEventListener('drop', handleDrop);
    }
  }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);

  const resetDragEvents = useCallback((): void => {
    // 앞서 말했던 4개의 이벤트에 Listener를 삭제합니다. (언마운트 될때)

    if (dragRef.current !== null) {
      dragRef.current.removeEventListener('dragenter', handleDragIn);
      dragRef.current.removeEventListener('dragleave', handleDragOut);
      dragRef.current.removeEventListener('dragover', handleDragOver);
      dragRef.current.removeEventListener('drop', handleDrop);
    }
  }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);

  useEffect(() => {
    initDragEvents();

    return () => resetDragEvents();
  }, [initDragEvents, resetDragEvents]);

  return isUploading ? (
    <Styled.LoadingWrapper>Uploading...</Styled.LoadingWrapper>
  ) : (
    <>
      <Styled.FileInput type="file" id="videoUpload" onChange={onChangeFile} accept="video/*" />
      <Styled.FileLabel ref={dragRef} htmlFor="videoUpload" isDragging={isDragging}>
        <Styled.FileUploadContainer>
          <Text fontSize={14} fontWeight={500}>
            발표 영상 업로드
          </Text>
          <Text fontSize={10} fontWeight={400} color={isDragging ? Theme.P_2 : Theme.S_4}>
            파일을 드롭해서 바로 등록해보세요.
          </Text>
          <Styled.ButtonLabel htmlFor="videoUpload">
            <Text fontSize={13} fontWeight={400} color={Theme.S_0}>
              업로드하기
            </Text>
          </Styled.ButtonLabel>
          <Styled.IconWrapper>
            <Icon icon="BoatedSymbol" color={isDragging ? '#94B0DC61' : Theme.S_2} width={428} height={428} />
          </Styled.IconWrapper>
        </Styled.FileUploadContainer>
      </Styled.FileLabel>
    </>
  );
};

export default FileDragDropInput;
