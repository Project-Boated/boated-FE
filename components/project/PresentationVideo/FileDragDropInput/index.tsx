import React, { useState } from 'react';

import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { useQueryClient } from 'react-query';

import { putProjectsVideo } from '@/lib/api/projects';
import * as queryKeys from '@/lib/constants/queryKeys';

import Icon from '@/components/atoms/Icon';
import Text from '@/components/atoms/Text';

import Theme from '@/styles/Theme';

import * as Styled from './style';

const FileDragDropInput = () => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [isUploading, setIsUploading] = useState<boolean>(false);

  const router = useRouter();
  const projectId = parseInt(router.query.id as string, 10);

  const queryClient = useQueryClient();

  const handleDragOver = (e: React.ChangeEvent<HTMLDivElement> | any) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.type === 'dragenter' || e.type === 'dragover') {
      setIsDragging(true);
    }
  };

  const handleDragLeave = (e: React.ChangeEvent<HTMLDivElement> | any) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.type === 'dragleave') {
      setIsDragging(false);
    }
  };

  const handleChangeFile = async (e: React.ChangeEvent<HTMLInputElement> | any) => {
    e.preventDefault();
    e.stopPropagation();

    setIsDragging(false);

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
  };

  return isUploading ? (
    <Styled.LoadingWrapper>Uploading...</Styled.LoadingWrapper>
  ) : (
    <Styled.Container
      isDragging={isDragging}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleChangeFile}
    >
      <Styled.FileInput type="file" accept="video/*" id="videoUpload" onChange={handleChangeFile} />
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
    </Styled.Container>
  );
};

export default FileDragDropInput;
