import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  width: 1313px;

  margin-top: 350px;

  & > :nth-child(2) {
    margin: 0 11px 0 15px;
  }
`;

export const InfoBoxContainer = styled.div`
  & > :nth-child(2) {
    margin: 16px 0 7px 0;
  }
`;

export const SubInfoContainer = styled.div`
  display: flex;

  & > :first-child {
    margin-right: 11px;
  }
`;
