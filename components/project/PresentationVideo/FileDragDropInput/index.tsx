import React, { useCallback, useEffect, useRef, useState } from 'react';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';

import Button from '@/components/atoms/Button';
import Icon from '@/components/atoms/Icon';
import Text from '@/components/atoms/Text';

import Theme from '@/styles/Theme';

import * as Styled from './style';
import { putProjectsVideo } from '@/lib/api/projects';

interface FileDragDropInputProps {
  videoFile: File | undefined;
  setVideoFile: React.Dispatch<React.SetStateAction<File | undefined>>;
  projectId: number;
}

const FileDragDropInput = ({ videoFile, setVideoFile, projectId }: FileDragDropInputProps) => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const dragRef = useRef<HTMLLabelElement | null>(null);

  const onChangeFile = useCallback(async (e: React.ChangeEvent<HTMLInputElement> | any) => {
    const videoFormData = new FormData();

    if (e.type === 'drop') {
      videoFormData.append('file', e.dataTransfer.files['0']);
      // setVideoFile(e.dataTransfer.files['0']);
    } else {
      videoFormData.append('file', e.target.files['0']);
      //   setVideoFile(e.target.files['0']);
    }

    try {
      await putProjectsVideo({ videoFormData, projectId });
    } catch (e: unknown) {
      const error = e as AxiosError;
      alert(JSON.stringify(error.response?.data.message));
    }
  }, []);

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

  return (
    <>
      <Styled.FileInput type="file" id="videoUpload" onChange={onChangeFile} />
      <Styled.FileLabel ref={dragRef} htmlFor="videoUpload" isDragging={isDragging}>
        <Styled.FileUploadContainer>
          <Text fontSize={14} fontWeight={500}>
            발표 영상 업로드
          </Text>
          <Text fontSize={10} fontWeight={400} color={Theme.S_4}>
            파일을 드롭해서 바로 등록해보세요.
          </Text>
          <Styled.ButtonLabel htmlFor="videoUpload">
            <Text fontSize={13} fontWeight={400} color={Theme.S_0}>
              업로드하기
            </Text>
          </Styled.ButtonLabel>
          <Styled.IconWrapper>
            <Icon icon="BoatedSymbol" color={Theme.S_2} width={428} height={428} />
          </Styled.IconWrapper>
        </Styled.FileUploadContainer>
      </Styled.FileLabel>
    </>
  );
};

export default FileDragDropInput;
