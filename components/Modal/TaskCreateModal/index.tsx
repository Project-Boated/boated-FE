import React, { useState } from 'react';
import { useRouter } from 'next/router';

import { postProjectsKanbanTask } from '@/lib/api/projects';
import { PostProjectsKanbanTaskCreateProps } from '@/lib/api/types';

import Modal from '@/components/Modal';

import TimeTableBox from '@/components/date/TimeTableBox';
import useTimePicker from '@/components/date/TimePicker/useTimePicker';
import useCalendar from '@/components/date/Calendar/useCalendar';

import Label from '@/components/atoms/Label';
import Input from '@/components/atoms/Input';
import Button from '@/components/atoms/Button';
import Text from '@/components/atoms/Text';
import Textarea from '@/components/atoms/Textarea';

import * as Styled from './style';

export interface TaskCreateModalProps {
  closeModal: () => void;
}

interface InfoState {
  name: string;
  description: string;
}

const TaskCreateModal = ({ closeModal }: TaskCreateModalProps) => {
  const router = useRouter();

  const { hourType, setHourType, hour, setHour, minute, setMinute } = useTimePicker();
  const { year, setYear, month, setMonth, date, setDate } = useCalendar();

  const [info, setInfo] = useState<InfoState>({
    name: '',
    description: '',
  });

  const projectId = parseInt(router.query.id as string, 10);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onClickCreate = async () => {
    const requestObj: PostProjectsKanbanTaskCreateProps = {
      ...info,
      projectId,
      deadline: `${year}-${month}-${date} ${hour}:${minute}:00`,
    };

    type Key = keyof PostProjectsKanbanTaskCreateProps;

    const requestObjForKor = {
      projectId: '프로젝트 아이디',
      name: '프로젝트 이름',
      description: '프로젝트 설명',
      deadline: '마감 기한',
    };

    Object.keys(requestObj).forEach((key) => {
      if (requestObj[key as Key] === '') {
        alert(requestObjForKor[key as Key]);
        return;
      }
    });

    try {
      await postProjectsKanbanTask(requestObj);
      alert('task 생성이 완료되었습니다!');
      closeModal();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Modal width={924} height={656} closeModal={closeModal}>
      <Styled.FormContainer>
        <Styled.FlexContainer>
          <Styled.LeftContainer>
            <Label htmlFor="name">Task 이름</Label>
            <Input type="text" id="name" name="name" width={350} height={40} value={info.name} onChange={onChange} />
          </Styled.LeftContainer>
          <Styled.RightContainer>
            <Text fontSize={14}>마감기한</Text>
            <TimeTableBox
              year={year}
              month={month}
              date={date}
              hourType={hourType}
              hour={hour}
              minute={minute}
              setYear={setYear}
              setMonth={setMonth}
              setDate={setDate}
              setHourType={setHourType}
              setHour={setHour}
              setMinute={setMinute}
            />
          </Styled.RightContainer>
        </Styled.FlexContainer>
        <Styled.TaskDescriptionTextareaContainer>
          <Label htmlFor="description">Task 설명 (100자 이내)</Label>
          <Textarea width={793} height={95} name="description" value={info.description} onChange={onChange} />
        </Styled.TaskDescriptionTextareaContainer>
        <Button width={200} height={50} onClick={onClickCreate}>
          생성하기
        </Button>
      </Styled.FormContainer>
    </Modal>
  );
};

export default TaskCreateModal;
