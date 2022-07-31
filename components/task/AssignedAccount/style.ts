import styled from 'styled-components';

import Theme from '@/styles/Theme';

export const Container = styled.li`
  display: flex;
  align-items: center;

  list-style-type: none;

  width: 81px;
  height: 30px;

  padding: 0 7px 0 12px;

  border: 1px solid ${Theme.P_2};
  background-color: ${Theme.S_0};
  border-radius: 20px;

  & > :first-child {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  & > :last-child {
    cursor: pointer;

    margin-left: 7px;
  }
`;
