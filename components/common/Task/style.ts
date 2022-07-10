import styled from 'styled-components';

import Theme from '@/styles/Theme';

export const Wrapper = styled.div`
  position: relative;

  margin-top: 19px;

  min-width: 227px;
  min-height: 186px;

  background: ${Theme.S_0};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`;

export const IconWrapper = styled.div`
  position: absolute;

  top: 7px;
  right: 7px;

  cursor: pointer;
`;

export const ContentsWrapper = styled.div`
  box-sizing: border-box;

  padding: 15px 12px 9px 15px;
`;

export const TaskNameContainer = styled.div`
  display: flex;
  align-items: center;

  width: 193px;
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 15px;
`;

export const TextBlock = styled.div``;

export const DivEnd = styled.div`
  text-align: right;
`;

export const AssignedAccountsContainer = styled.div`
  width: 170px;

  margin-top: 20px;
  gap: 6px;

  display: flex;
  align-items: center;
`;

export const AssignedAccountImg = styled.img`
  width: 30px;
  height: 30px;

  border-radius: 50%;
`;

export const TaskDescription = styled.div`
  width: 144px;
  height: 24px;
  box-sizing: border-box;
  padding: 5px 12px;
  margin-top: 13px;

  background: rgba(148, 176, 220, 0.46);
  border-radius: 12px;

  display: flex;
  align-items: center;
`;

export const EllipsisSpanWrapper = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
