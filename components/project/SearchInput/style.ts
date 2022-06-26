import styled from 'styled-components';

import Theme from '@/styles/Theme';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  width: 266px;
  height: 28px;

  background: ${Theme.S_0};
  border: 0.5px solid ${Theme.S_5};
  border-radius: 14px;

  & > :first-child {
    margin: 0 7px 0 14px;
  }
`;

export const StyledInput = styled.input`
  width: 230px;

  font-size: 10px;
  font-weight: 400;
  line-height: 14px;
  color: ${Theme.S_5};

  &::placeholder {
    color: ${Theme.S_5};
  }
`;
