import styled from 'styled-components';

import Theme from '@/styles/Theme';

export const Wrapper = styled.div<{ terminated: boolean }>`
  width: 1056px;
  height: 150px;

  background-color: ${Theme.S_0};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;

  // DdayBar가 있다면
  & > :first-child {
    margin-left: ${({ terminated }) => !terminated && 21}px;
  }
`;

export const Container = styled.div<{ terminated: boolean }>`
  display: flex;

  margin: 0px 49px 0px 75px;

  padding-top: ${({ terminated }) => (terminated ? 30 : 10)}px;

  & > :first-child {
    display: flex;
    align-items: center;
  }

  & > :nth-child(2) {
    margin: 0 76px 0 125px;
  }
`;

export const ProjectInfoWrapper = styled.div`
  width: 464px;

  & > :first-child {
    margin-bottom: 13px;
  }
`;

export const PersonInfoContainer = styled.div`
  // 팀장, 팀원 제목
  & > :first-child,
  & > :nth-child(3) {
    display: inline-block;

    width: 35px;

    overflow: hidden;
  }

  // 팀장 이름
  & > :nth-child(2) {
    display: inline-block;

    width: 95px;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  // 팀원들 이름
  & > :nth-child(4) {
    display: inline-block;

    width: 263px;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const ProjectDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;

  & > :nth-child(2) {
    display: inline-block;

    width: 464px;
    height: 3rem;

    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.2;
    white-space: normal;
    word-break: break-all;

    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
`;

export const DeadlineWrapper = styled.div`
  & > :first-child {
    display: inline-block;

    width: 58px;

    margin-right: 36px;
  }

  & > :nth-child(2) {
    display: inline-block;

    width: 75px;
  }
`;
