import styled, { css } from 'styled-components';

import Theme from '@/styles/Theme';

import { DropDownSize } from '@/types/size';

export const Wrapper = styled.div`
  position: relative;
`;

export const DefaultTitleWrapper = styled.div<DropDownSize>`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: ${({ borderRadius }) => borderRadius}px;
  background-color: ${Theme.S_0};

  .default-title-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  ${({ type }) =>
    type === 'size-176' &&
    css`
      width: 176px;
      height: 40px;

      .default-title-container {
        width: 145px;
      }
    `};

  ${({ type }) =>
    type === 'size-110' &&
    css`
      width: 110px;
      height: 40px;

      .default-title-container {
        width: 86px;
      }
    `};

  ${({ type }) =>
    type === 'size-88' &&
    css`
      width: 88px;
      height: 28px;

      .default-title-container {
        width: 69px;
      }
    `}

  ${({ type }) =>
    type === 'size-72' &&
    css`
      width: 72px;
      height: 40px;

      .default-title-container {
        width: 52px;
      }
    `};
`;

export const RefWrapper = styled.div<DropDownSize>`
  position: absolute;
  top: ${({ type }) => (type === 'size-88' ? 28 : 40)}px;
  z-index: 10;

  width: inherit;
  height: 0;
`;

export const SelectListWrapper = styled.ul<DropDownSize>`
  overflow-y: auto;

  display: flex;
  flex-direction: column;

  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: ${({ borderRadius }) => borderRadius}px;
  background-color: ${Theme.S_0};

  padding: 15px 0;

  height: ${({ type }) => (type === 'size-88' ? 84 : 260)}px;

  & > :not(:last-child) {
    margin-bottom: 15px;
  }

  ${({ type }) =>
    type === 'size-176' &&
    css`
      width: 176px;

      li {
        width: 100%;
      }
    `};

  ${({ type }) =>
    type === 'size-110' &&
    css`
      width: 110px;

      li {
        width: 100%;
      }
    `};

  ${({ type }) =>
    type === 'size-88' &&
    css`
      width: 88px;

      li {
        width: 100%;
      }
    `}

  ${({ type }) =>
    type === 'size-72' &&
    css`
      width: 72px;

      li {
        width: 100%;
      }
    `};
`;

export const SelectItemWrapper = styled.li<DropDownSize & { isSelected: boolean }>`
  cursor: pointer;

  display: flex;
  align-items: center;

  border-radius: 6px;
  background-color: ${({ isSelected }) => isSelected && Theme.M_1};

  font-size: ${({ type }) => (type === 'size-88' ? 10 : 14)}px;
  color: ${({ isSelected }) => isSelected && Theme.S_0};

  width: 50px;
  min-height: ${({ type }) => (type === 'size-88' ? 16 : 40)}px;

  padding-left: 13px;

  margin: 0 auto;
`;
