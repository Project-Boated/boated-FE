import React, { useCallback } from 'react';

import { ProjectState } from '@/lib/api/types';

import useBoolean from '@/hooks/useBoolean';

import Icon from '@/components/atoms/Icon';
import Text from '@/components/atoms/Text';

import * as Styled from './style';

export interface ProjectAccordionProps extends ProjectState {
  setProjectList: React.Dispatch<React.SetStateAction<ProjectState[]>>;
}

const ProjectAccordion = ({ setProjectList, ...project }: ProjectAccordionProps) => {
  const { isShow, toggle } = useBoolean();

  const handleProjectAccordionClick = useCallback(() => {
    if (project.assignedTasks.length === 0) return;

    setProjectList((prev) =>
      prev.map((info) => (info.id === project.id ? { ...info, isClicked: !info.isClicked } : info)),
    );
    toggle();
  }, [project]);

  return (
    <Styled.Container>
      <Styled.TriggerWrapper onClick={handleProjectAccordionClick}>
        <Text fontSize={14} lineHeight={14} fontFamily="Gmarket Sans">
          {project.name}
        </Text>
        <Icon icon="Arrow" rotate={isShow ? 0 : 180} />
      </Styled.TriggerWrapper>
      {isShow && (
        <Styled.TaskListContainer>
          {project.assignedTasks.map((task) => (
            <Styled.TaskContainer key={task.id}>
              <Icon icon="GanttArrow" />
              <Text fontSize={14}>{task.name}</Text>
            </Styled.TaskContainer>
          ))}
        </Styled.TaskListContainer>
      )}
    </Styled.Container>
  );
};

export default React.memo(ProjectAccordion);
