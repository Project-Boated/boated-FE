import React from 'react';

import * as Styled from './style';

export interface TaskProgressBarProps {
  period: number;
}

const TaskProgressBar = ({ period }: TaskProgressBarProps) => {
  return (
    <Styled.Container>
      <Styled.Circle />
      <Styled.Bar width={period * 51} />
      <Styled.Circle />
    </Styled.Container>
  );
};

export default TaskProgressBar;
