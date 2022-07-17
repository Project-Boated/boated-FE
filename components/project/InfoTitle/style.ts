import styled, { css } from 'styled-components';

const wrapper = css`
  display: flex;
  align-items: center;
`;

export const Label = styled.label<{ margin: number }>`
  cursor: pointer;

  ${wrapper};

  width: 175px;

  & > :first-child {
    margin-right: ${({ margin }) => margin}px;
  }

  & > :nth-child(3) {
    margin-left: 5px;
  }
`;

export const Div = styled.div<{ margin: number }>`
  ${wrapper};

  & > :first-child {
    margin-right: ${({ margin }) => margin}px;
  }
`;
