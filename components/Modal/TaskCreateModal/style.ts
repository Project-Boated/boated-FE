import styled from 'styled-components';

export const FormContainer = styled.form`
  width: 790px;
  height: 548px;

  & > :last-child {
    margin: 0 auto;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;

  height: 321px;
`;

export const LeftContainer = styled.div`
  & > :first-child {
    margin-bottom: 15px;
  }
`;

export const RightContainer = styled.div`
  & > :last-child {
    margin-top: 13px;
  }
`;

export const TaskDescriptionTextareaContainer = styled.div`
  margin: 8px 0 34px 0;

  & > :last-child {
    margin: 19px 0 0 0;
  }
`;
