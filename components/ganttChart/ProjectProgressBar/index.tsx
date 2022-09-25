import React from 'react';

import * as Styled from './style';

export interface ProjectProgressBarProps {
  period: number;
  backgroundColor: string;
}

const ProjectProgressBar = ({ period, backgroundColor }: ProjectProgressBarProps) => {
  return <Styled.Wrapper width={period * 51} backgroundColor={backgroundColor} />;
};

export default ProjectProgressBar;
