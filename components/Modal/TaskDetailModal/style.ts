import styled from 'styled-components';

import { boxDesign } from '@/styles/common';

export const Container = styled.div`
  width: 793px;
  height: 808px;

  & > :last-child {
    cursor: pointer;

    margin-left: 710px;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;

  height: 582px;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;

  & > :first-child {
    margin-bottom: 33px;
  }
`;

export const TaskNameInputContainer = styled.div`
  display: flex;
  flex-direction: column;

  & > :first-child {
    margin-bottom: 5px;
  }
`;

export const AssignedCrewSelectorContainer = styled.div``;

export const AssignedCrewListContainer = styled.ul`
  display: flex;

  margin: 10px 0 17px 0;

  width: 350px;

  overflow-x: scroll;

  & > li:not(:last-child) {
    margin-right: 5px;
  }
`;

export const AssignedCrewDropDownContainer = styled.div`
  display: flex;

  gap: 8px;
`;

export const RightContainer = styled.div`
  width: 357px;

  & > :nth-child(2) {
    margin: 10px 0 34px 0;
  }

  & > :last-child {
    margin-top: 31px;
  }
`;

export const LaneSelectorContainer = styled.div`
  & > :last-child {
    margin-top: 10px;
  }
`;

export const RegisteredFileContainer = styled.div``;

export const FileInputContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 3px;

  margin-bottom: 9px;
`;

export const FileInput = styled.input`
  display: none;
`;

export const FileListContainer = styled.div`
  overflow-y: auto;

  width: 357px;
  height: 95px;

  ${boxDesign()};
`;

export const TaskDescriptionTextareaContainer = styled.div`
  margin-top: 4px;

  & > :last-child {
    margin: 10px 0 78px 0;
  }
`;
