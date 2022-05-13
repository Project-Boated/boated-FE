import styled from 'styled-components';

import Theme from '@/styles/Theme';

export const Wrapper = styled.div`
  position: relative;

  display: flex;

  width: 1137px;
  height: 617px;

  background: ${Theme.S_0};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 51px;
`;

export const SeaWaveWrapper = styled.div`
  display: flex;

  height: 0;

  svg {
    position: absolute;
    top: -4px;
    left: -3px;
  }
`;

export const LeftContainer = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 500px;
  height: 95%;

  & > :not(:nth-child(2)) {
    position: absolute;
  }

  & > :nth-child(3) {
    margin-bottom: 60px;
  }

  & > span {
    font-family: 'Gmarket Sans';
    color: ${Theme.M_1};
    font-size: 18px;
    line-height: 18px;
    font-weight: 300;

    margin-top: 70px;
  }
`;

export const RightContainer = styled.div`
  width: 566px;
  height: 512px;

  margin-top: 69px;

  z-index: 999;

  & > :nth-child(2) {
    margin: 28px 0 33px 0;
  }

  & > :last-child {
    margin: 0 auto;
    margin-top: 44px;
  }
`;

export const WarningAbsoluteWrapper = styled.div`
  position: absolute;

  top: 12px;
  right: 43px;
`;

export const StyledLabel = styled.label`
  cursor: pointer;

  color: ${Theme.S_5};
  font-size: 14px;
  font-weight: 400;

  .is-required {
    color: ${Theme.W_1};
  }
`;

export const WarningWrapper = styled.div<{ hasError: boolean }>`
  visibility: ${({ hasError }) => (hasError ? 'visible' : 'hidden')};
`;

export const ProjectNameContainer = styled.div`
  & > :nth-child(2) {
    margin: 7px 0 5px 0;
  }
`;

export const ProjectDueDateContainer = styled.div`
  & > :nth-child(2) {
    margin: 7px 0 15px 0;
  }
`;

export const DateWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  width: 428px;
`;

export const TimeWrapper = styled.div`
  display: flex;

  & > :first-child {
    margin-right: 20px;
  }

  & > :nth-child(2) {
    margin-right: 6px;
  }
`;

export const ProjectDescriptionContainer = styled.div`
  & > :nth-child(2) {
    margin-top: 15px;
  }
`;

export const StyledTextArea = styled.textarea`
  width: 566px;
  height: 108px;

  border: none;
  background: ${Theme.S_0};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;

  outline: none;
  resize: none;

  padding: 7px 0 0 15px;
`;
