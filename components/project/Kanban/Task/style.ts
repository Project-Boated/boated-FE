import styled from 'styled-components';

import { boxDesign } from '@/styles/common';
import Theme from '@/styles/Theme';

export const Wrapper = styled.div`
  position: relative;

  margin-top: 19px;

  width: 227px;
  height: 186px;

  background: ${Theme.S_0};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`;

export const LikeIconWrapper = styled.div`
  position: absolute;

  left: 14px;

  cursor: pointer;
`;

export const DottedIconWrapper = styled.div`
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

  margin-top: 16px;

  width: 200px;
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 30px;
`;

export const TextBlock = styled.div``;

export const DivEnd = styled.div`
  text-align: right;
`;

export const AssignedAccountsContainer = styled.div`
  width: 170px;

  margin-top: 30px;
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

export const MoreContainer = styled.div`
  position: absolute;

  top: 29px;
  left: 55px;

  width: 163px;
  height: 79px;

  ${boxDesign()};

  z-index: 0;
`;

export const FavoriteAddWrapper = styled.div`
  display: flex;
  align-items: center;

  padding: 10px 12px;

  border-bottom: 1px solid ${Theme.S_2};

  height: 39px;

  cursor: pointer;
`;

export const TaskRemoveWrapper = styled.div`
  display: flex;
  align-items: center;

  padding: 10px 12px;

  height: 39px;

  cursor: pointer;
`;
