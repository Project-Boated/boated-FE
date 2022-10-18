import React, { useCallback, useEffect } from 'react';
import { useQuery } from 'react-query';
import { useRouter } from 'next/router';

import { getProjectsVideoDescription } from '@/lib/api/projects';
import * as queryKeys from '@/lib/constants/queryKeys';

import Icon from '@/components/atoms/Icon';
import Text from '@/components/atoms/Text';
import Textarea from '@/components/atoms/Textarea';

import * as Styled from './style';

export interface VideoDescriptionProps {
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
}

const VideoDescription = ({ description, setDescription }: VideoDescriptionProps) => {
  const router = useRouter();
  const projectId = parseInt(router.query.id as string, 10);

  const { data, isLoading } = useQuery(
    `${queryKeys.PROJECTS_VIDEO_DESCRIPTION}/${projectId}`,
    () => getProjectsVideoDescription(projectId),
    {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  );

  useEffect(() => {
    if (data && !isLoading) {
      setDescription(data.description);
    }
  }, [isLoading]);

  const handleTextareaChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setDescription(e.target.value);
    },
    [description],
  );

  return (
    <Styled.Container>
      <Styled.TitleContainer>
        <Icon width={20} height={20} icon="BoatedSymbol" />
        <Text>설명 (300자 이내)</Text>
      </Styled.TitleContainer>
      <Textarea width={999} height={139} value={description} onChange={handleTextareaChange} />
    </Styled.Container>
  );
};

export default VideoDescription;
