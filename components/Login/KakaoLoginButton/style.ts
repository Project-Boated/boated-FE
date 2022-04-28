import styled from 'styled-components';

import Theme from '@/styles/Theme';

export const Wrapper = styled.a`
  cursor: pointer;

  display: flex;
  align-items: center;

  width: 205px;
  height: 51px;

  padding: 0;

  border: none;
  border-radius: 12px;
  background-color: #fee500;

  text-decoration: none;
  color: ${Theme.S_5};

  & > :first-child {
    margin-left: 15px;
  }

  span {
    font-family: 'Noto Sans KR';

    margin-left: 35px;
  }
`;
