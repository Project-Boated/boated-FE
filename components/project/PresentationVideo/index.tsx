import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useRouter } from 'next/router';

import { getProjectsKanban, getProjectsVideo } from '@/lib/api/projects';
import * as queryKeys from '@/lib/constants/queryKeys';

import VideoDescription from '@/components/project/PresentationVideo/VideoDescription';
import FileDragDropInput from '@/components/project/PresentationVideo/FileDragDropInput';

import * as Styled from './style';

const PresentationVideo = () => {
  const router = useRouter();
  const projectId = parseInt(router.query.id as string, 10);

  const [videoFile, setVideoFile] = useState<File>();

  const { data } = useQuery(`${queryKeys.PROJECTS_VIDEO}/${projectId}`, () => getProjectsVideo(projectId));

  useEffect(() => {
    console.log(data);
    // const reader = new FileReader();

    // if (data) {
    //   const blob = new Blob([new ArrayBuffer(data)], { type: 'video/mp4' });
    //   console.log(blob);

    // reader.readAsDataURL(data);
    // }
  }, [data]);

  return (
    <Styled.Container>
      <Styled.H1>발표 영상</Styled.H1>
      <Styled.PresentationContainer>
        <FileDragDropInput videoFile={videoFile} setVideoFile={setVideoFile} projectId={projectId} />
        {/* <video src={data} /> */}
        <VideoDescription />
      </Styled.PresentationContainer>
    </Styled.Container>
  );
};

export default PresentationVideo;
