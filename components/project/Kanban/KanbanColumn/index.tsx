import React, { useEffect, useRef, useState } from 'react';

import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { useRouter } from 'next/router';
import { AxiosError } from 'axios';
import { useQueryClient } from 'react-query';

import { putProjectsKanbanLaneName } from '@/lib/api/projects';
import { KanbanColumnState } from '@/lib/api/types';

import * as queryKeys from '@/lib/constants/queryKeys';

import useModal from '@/hooks/useModal';

import Icon from '@/components/atoms/Icon';
import Text from '@/components/atoms/Text';

import KanbanColumnDeleteModal from '@/components/Modal/KanbanColumnDeleteModal';

import Task from '@/components/project/Kanban/Task';

import Theme from '@/styles/Theme';

import * as Styled from './style';

export interface KanbanColumnProps extends KanbanColumnState {
  index: number;
  kanbanDataLength?: number;
}

const KanbanColumn = ({ id, name, tasks, index, kanbanDataLength }: KanbanColumnProps) => {
  const router = useRouter();
  const projectId = parseInt(router.query.id as string, 10);

  const queryClient = useQueryClient();

  const { isShowModal, closeModal, openModal } = useModal();

  const kanbanHeaderRef = useRef<HTMLDivElement>(null);
  const kanbanHeaderInputRef = useRef<HTMLInputElement>(null);

  const [headerName, setHeaderName] = useState(name);
  const [isDeleteIconVisible, setIsDeleteIconVisible] = useState(false);

  const useDetectHeaderOutsideClick: any = (el: React.RefObject<HTMLDivElement>, initialState: boolean) => {
    const [isActive, setIsActive] = useState(initialState);

    useEffect(() => {
      const pageClickEvent = async (e: Event) => {
        if (el.current && !el.current.contains(e.target as Node)) {
          setIsActive(!isActive);

          // 기존 이름과 바뀐 이름이 다르면 API 요청
          if (name !== headerName) {
            try {
              await putProjectsKanbanLaneName({ projectId, kanbanLaneId: id, name: headerName });
              queryClient.invalidateQueries(queryKeys.PROJECTS_KANBAN_BY_ID(projectId));
            } catch (e: unknown) {
              const error = e as AxiosError;
              alert(JSON.stringify(error.response?.data.message));
            }
          }
        }
      };

      if (isActive) {
        window.addEventListener('click', pageClickEvent);
      }

      return () => {
        window.removeEventListener('click', pageClickEvent);
      };
    }, [isActive, el, headerName]);

    return [isActive, setIsActive];
  };

  const [isEditable, setIsEditable] = useDetectHeaderOutsideClick(kanbanHeaderRef, false);

  const onChangeHeaderName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHeaderName(e.target.value);
  };

  const onDoubleClickHeaderName = () => {
    setIsEditable(true);
    setIsDeleteIconVisible(false);
  };

  // current가 있을때 focus
  useEffect(() => {
    if (isEditable && kanbanHeaderInputRef.current) {
      kanbanHeaderInputRef.current.focus();
    }
  }, [isEditable]);

  return (
    <>
      {isShowModal && (
        <KanbanColumnDeleteModal
          kanbanLaneId={id}
          columnName={name}
          taskDataLength={tasks.length}
          closeModal={closeModal}
        />
      )}
      <Draggable draggableId={name} index={index}>
        {(provided) => (
          <Styled.Container {...provided.draggableProps} ref={provided.innerRef}>
            <Styled.KanbanHeader
              ref={kanbanHeaderRef}
              {...provided.dragHandleProps}
              onMouseEnter={() => isEditable || setIsDeleteIconVisible(true)}
              onMouseLeave={() => setIsDeleteIconVisible(false)}
              onDoubleClick={onDoubleClickHeaderName}
            >
              {isDeleteIconVisible && kanbanDataLength !== 1 && (
                <Styled.IconWrapper onClick={openModal}>
                  <Icon icon="KanbanColumnDelete" />
                </Styled.IconWrapper>
              )}
              {isEditable ? (
                <Styled.HeaderChangeInput
                  type="text"
                  id="header-name"
                  name="header-name"
                  width={200}
                  height={40}
                  maxLength={15}
                  value={headerName}
                  onChange={onChangeHeaderName}
                  ref={kanbanHeaderInputRef}
                />
              ) : (
                <Text fontSize={14} fontFamily="Gmarket Sans" color={Theme.S_0}>
                  {name}
                </Text>
              )}
            </Styled.KanbanHeader>
            <Droppable droppableId={String(id)} type="task">
              {(provided) => (
                <Styled.KanbanContainer {...provided.droppableProps} ref={provided.innerRef}>
                  <>
                    {tasks.map((task, index) => (
                      <Task key={task.id} index={index} task={task} />
                    ))}
                    {provided.placeholder}
                  </>
                </Styled.KanbanContainer>
              )}
            </Droppable>
          </Styled.Container>
        )}
      </Draggable>
    </>
  );
};

export default KanbanColumn;
