import React, { useState } from 'react';

import useModal from '@/hooks/useModal';

import Button from '@/components/atoms/Button';
import Input from '@/components/atoms/Input';
import Label from '@/components/atoms/Label';
import Text from '@/components/atoms/Text';
import Textarea from '@/components/atoms/Textarea';
import DropDown from '@/components/common/DropDown';
import useCalendar from '@/components/date/Calendar/useCalendar';
import useTimePicker from '@/components/date/TimePicker/useTimePicker';
import TimeTableBox from '@/components/date/TimeTableBox';
import Modal from '@/components/Modal';
import AssignedAccount from '@/components/task/AssignedAccount';

import Theme from '@/styles/Theme';

import * as Styled from './style';

const crewList = ['윤준서', '윤준서', '윤준서', '윤준서', '윤준서', '윤준서', '윤준서'];
const assignedCrewList = ['윤준서', '팀원1', '팀원2', '팀원3', '팀원4'];
const laneList = ['대기중', '진행중', '확인중', '완료'];

const TaskDetailModal = () => {
  const { closeModal } = useModal();

  const { year, setYear, month, setMonth, date, setDate } = useCalendar();
  const { hourType, setHourType, hour, setHour, minute, setMinute } = useTimePicker();

  const [name, setName] = useState<string>('');

  const [crew, setCrew] = useState<string>('');

  const [lane, setLane] = useState<string>('');

  const [file, setFile] = useState<string>('');

  const handleDrag = (e: React.DragEvent, type: string) => {
    e.preventDefault();

    if (type === 'drop') {
      console.log(e.dataTransfer.files);
    }
  };

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    alert('file upload');
  };

  return (
    <Modal width={924} height={916} closeModal={closeModal}>
      <Styled.Container>
        <Styled.FlexContainer>
          <Styled.LeftContainer>
            <Styled.TaskNameInputContainer>
              <Label htmlFor="name" isRequired>
                Task 이름
              </Label>
              <Input type="text" id="name" name="name" width={350} height={40} value={name} onChange={onChangeName} />
            </Styled.TaskNameInputContainer>

            <Styled.AssignedCrewSelectorContainer>
              <Label htmlFor="crews" isRequired>
                배정할 팀원
              </Label>
              <Styled.AssignedCrewListContainer>
                {assignedCrewList.map((crew) => (
                  <AssignedAccount key={crew}>{crew}</AssignedAccount>
                ))}
              </Styled.AssignedCrewListContainer>
              <Styled.AssignedCrewDropDownContainer>
                <DropDown
                  type="size-264"
                  defaultTitle="팀원을 선택하세요"
                  selectList={crewList}
                  selectedItem={crew}
                  setSelectedItem={setCrew}
                />
                <Button width={73} height={41} fontSize={12} borderRadius={7}>
                  추가하기
                </Button>
              </Styled.AssignedCrewDropDownContainer>
            </Styled.AssignedCrewSelectorContainer>
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
            <Styled.LaneSelectorContainer>
              <Text fontSize={14}>레인 선택</Text>
              <DropDown
                type="size-357"
                defaultTitle="레인 선택"
                selectList={laneList}
                selectedItem={lane}
                setSelectedItem={setLane}
              />
            </Styled.LaneSelectorContainer>
            <Styled.RegisteredFileContainer>
              <Styled.FileInputContainer>
                <Text fontSize={14}>등록된 파일</Text>
                <Label
                  htmlFor="file"
                  width={64}
                  height={23}
                  backgroundColor={Theme.M_1}
                  borderRadius={7}
                  fontSize={10}
                  lineHeight={14}
                  color={Theme.S_0}
                >
                  파일 찾기
                </Label>
                <Styled.FileInput type="file" id="file" value={file} onChange={onChangeFile} />
              </Styled.FileInputContainer>
              <Styled.FileListContainer
                onDragOver={(e) => handleDrag(e, 'over')}
                onDrop={(e) => handleDrag(e, 'drop')}
              />
            </Styled.RegisteredFileContainer>
          </Styled.RightContainer>
        </Styled.FlexContainer>
        <Styled.TaskDescriptionTextareaContainer>
          <Label htmlFor="description">Task 설명 (100자 이내)</Label>
          <Textarea width={793} height={95} />
        </Styled.TaskDescriptionTextareaContainer>
        <Text color={Theme.W_1} fontSize={14} hasUnderline>
          Task 삭제하기
        </Text>
      </Styled.Container>
    </Modal>
  );
};

export default TaskDetailModal;
