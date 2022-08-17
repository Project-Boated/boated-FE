import styled from 'styled-components';

import Theme from '@/styles/Theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const KanbanHeader = styled.div`
  position: relative;

  width: 246px;
  height: 37px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${Theme.M_1};
  border-radius: 17.5px;

  margin-bottom: 9px;
`;

export const KanbanContainer = styled.div`
  width: 246px;
  height: 770px;
  padding-bottom: 19px;

  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;

  background: ${Theme.S_1};
  border-radius: 8px;
`;

export const IconWrapper = styled.div`
  position: absolute;
  right: 5px;

  cursor: pointer;
`;

export const HeaderChangeInput = styled.input`
  width: 230px;
  height: 30px;

  text-align: center;

  outline: none;
  background: ${Theme.M_1};
  color: ${Theme.S_0};

  font-family: 'Gmarket Sans';
  font-size: 14px;
`;
